import { ColumnDef } from "@tanstack/react-table";
import TransactionActions from "./TransactionActions"; // Import the TransactionActions component

export type Transaction = {
  transactionId: number;
  userId: number;
  salespersonId: number;
  carId: number;
  date: string; // ISO string representation of LocalDate
  amount: number;
  status: string;
  payment_method: string;
  offerAmount?: number;
  comments: string;
  createdAt: string; // ISO string representation of LocalDateTime
  updatedAt: string; // ISO string representation of LocalDateTime
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "salespersonId",
    header: "Salesperson ID",
  },
  {
    accessorKey: "carId",
    header: "Car ID",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const value = getValue() as string; // Assert the type if you expect a string
      return new Date(value).toLocaleDateString(); // Process the value
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => {
      const value = getValue() as number; // Assert the type if you expect a number
      return `$${value.toFixed(2)}`; // Process the value
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "comments",
    header: "Comments",
  },
  {
    id: "actions", // Unique id for this column
    header: "Actions",
    cell: ({ row }) => (
      <TransactionActions
        transaction={row.original}
        onAccept={(transaction) => {
          // Implement your accept logic here
          console.log("Accepted:", transaction);
        }}
        onReject={(transaction) => {
          // Implement your reject logic here
          console.log("Rejected:", transaction);
        }}
      />
    ),
  },
];
