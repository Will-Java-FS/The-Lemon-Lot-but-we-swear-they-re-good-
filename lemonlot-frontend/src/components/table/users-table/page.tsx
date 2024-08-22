import { User, columns } from "./columns"; // Adjust the path as needed
import { DataTable } from "@/components/ui/data-table"; // Adjust the path as needed

// Static user data
const staticData: User[] = [
  {
    id: "1",
    username: "johndoe",
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
  },
  {
    id: "2",
    username: "janedoe",
    email: "jane@example.com",
    firstName: "Jane",
    lastName: "Doe",
    role: "User",
  },
  // Add more user data as needed
];

export default function UserPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={staticData} />
    </div>
  );
}
