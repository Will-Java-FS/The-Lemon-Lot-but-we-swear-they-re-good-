import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";

export type User = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => (
      <button
        onClick={() => handleEdit(row.original)}
        className="p-2 text-blue-500"
      >
        <Pencil className="w-5 h-5" />
      </button>
    ),
  },
  {
    id: "delete",
    header: "Delete",
    cell: ({ row }) => (
      <button
        onClick={() => handleDelete(row.original)}
        className="p-2 text-red-500"
      >
        <Trash className="w-5 h-5" />
      </button>
    ),
  },
];

function handleEdit(user: User) {
  // Implement your edit functionality here
  console.log("Edit user:", user);
}

function handleDelete(user: User) {
  // Implement your delete functionality here
  console.log("Delete user:", user);
}
