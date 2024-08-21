import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import axios from "axios";
import { FormFieldItem } from "./FormFieldItem";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./ui/LoadingSpinner";

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
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      console.log("Form values:", values);
      const API_URL = import.meta.env.VITE_API_URL;
      console.log("API URL:", API_URL);
      const registerResponse = await axios.post(
        `${API_URL}/users/register`,
        values
      );
      console.log("Registration successful!", registerResponse.data);

      const loginResponse = await axios.post(`${API_URL}/users/login`, {
        username: values.username,
        password: values.password,
      });

      console.log("Login successful!", loginResponse.data);
      localStorage.setItem("token", loginResponse.data.accessToken);
      const storedToken = localStorage.getItem("token");
      console.log("Stored Token:", storedToken);
      navigate("/user-profile");
      toast({
        title: "Registration Successful",
        description: "You have been successfully registered and logged in.",
      });
    } catch (error) {
      console.error("An error occurred during registration or login.", error);
      toast({
        title: "Registration Failed",
        description:
          "An error occurred during registration or login. Please try again.",
        variant: "destructive", // Assuming 'destructive' variant shows an error message
      });
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
          placeholder="username"
        />

        <FormFieldItem
          control={form.control}
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
        />

        <FormFieldItem
          control={form.control}
          name="firstName"
          label="First Name"
          placeholder="First Name"
        />

        <FormFieldItem
          control={form.control}
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
        />

        <FormFieldItem
          control={form.control}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Phone Number"
          type="tel"
        />

        <FormFieldItem
          control={form.control}
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />

        <FormFieldItem
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadingSpinner className="w-5 h-5 text-blue-500" /> // Custom size and color
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
}
