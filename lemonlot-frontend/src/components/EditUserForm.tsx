import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldItem } from "./FormFieldItem";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./ui/LoadingSpinner";
import {
  getUsername,
  getEmail,
  getFirstName,
  getLastName,
  getPhoneNumber,
  getSub,
} from "@/lib/authUtil"; // Adjust import path
import { useLocalStorage } from "usehooks-ts";
import axios from "axios";

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
      message:
        "Must be a valid international phone number (e.g., +1234567890 or 987654321).",
    }),
    oldPassword: z.string().min(8).optional(),
    newPassword: z.string().min(8).optional(),
    confirmPassword: z.string().min(8).optional(),
  })
  .refine(
    (data) => !data.newPassword || data.newPassword === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "New passwords don't match",
    }
  );

type UserFormValues = z.infer<typeof formSchema>;

export default function EditUserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<UserFormValues>({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [token] = useLocalStorage("auth_token", "");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (token) {
      const fetchUserData = () => {
        const userData: UserFormValues = {
          username: getUsername(token) || "",
          email: getEmail(token) || "",
          firstName: getFirstName(token) || "",
          lastName: getLastName(token) || "",
          phoneNumber: getPhoneNumber(token) || "",
          oldPassword: "", // Do not pre-populate password fields
          newPassword: "",
          confirmPassword: "",
        };

        setInitialValues(userData);
        form.reset(userData);
      };

      fetchUserData();
    } else {
      console.error("No token found in local storage");
    }
  }, [token, form]);

  async function updateUser(values: UserFormValues) {
    const updatedValues: Partial<UserFormValues> = {};

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(initialValues, key)) {
        const typedKey = key as keyof UserFormValues;
        if (
          values[typedKey] !== initialValues[typedKey] &&
          values[typedKey] !== ""
        ) {
          updatedValues[typedKey] = values[typedKey];
        }
      }
    }

    if (Object.keys(updatedValues).length === 0) {
      toast({
        title: "No Changes",
        description:
          "No changes detected. Please modify the fields you want to update.",
        variant: "destructive",
      });
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      await axios.patch(`${API_URL}/users/${getSub(token)}`, updatedValues);
      toast({
        title: "Update Successful",
        description: "Your profile has been successfully updated.",
      });
      navigate("/user-profile");
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An unknown error occurred";

      console.error("Error updating user data", errorMessage);

      toast({
        title: "Update Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }

  async function onSubmit(values: UserFormValues) {
    setIsLoading(true);
    try {
      await updateUser(values);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border rounded-lg p-6"
      >
        <FormFieldItem
          control={form.control}
          name="username"
          label="Username"
          placeholder={initialValues.username}
        />

        <FormFieldItem
          control={form.control}
          name="email"
          label="Email"
          placeholder={initialValues.email}
          type="email"
        />

        <FormFieldItem
          control={form.control}
          name="firstName"
          label="First Name"
          placeholder={initialValues.firstName}
        />

        <FormFieldItem
          control={form.control}
          name="lastName"
          label="Last Name"
          placeholder={initialValues.lastName}
        />

        <FormFieldItem
          control={form.control}
          name="phoneNumber"
          label="Phone Number"
          placeholder={initialValues.phoneNumber}
          type="tel"
        />

        <FormFieldItem
          control={form.control}
          name="oldPassword"
          label="Old Password"
          placeholder="Current password"
          type="password"
        />

        <FormFieldItem
          control={form.control}
          name="newPassword"
          label="New Password"
          placeholder="New password"
          type="password"
        />

        <FormFieldItem
          control={form.control}
          name="confirmPassword"
          label="Confirm New Password"
          placeholder="Confirm new password"
          type="password"
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadingSpinner className="w-5 h-5 text-blue-500" />
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </Form>
  );
}
