import { useEffect, useState } from "react";
import axios from "axios";
import { User, columns } from "./columns"; // Adjust the path as needed
import { DataTable } from "@/components/ui/data-table"; // Adjust the path as needed
import UserActions from "./UserActions";
import { Row } from "@tanstack/react-table"; // Import the Row type

const fetchUsers = async (): Promise<User[]> => {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API_URL}/users`); // Ensure the URL matches your backend endpoint
    return response.data;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};

export default function UserTable() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define the handleDelete function
  const handleDelete = (deletedUser: User) => {
    setData((prevData) =>
      prevData.filter((user) => user.id !== deletedUser.id)
    );
  };

  // Add the handleDelete function to the columns
  const filteredColumns = columns.map((col) => {
    if (col.id === "actions") {
      return {
        ...col,
        cell: ({ row }: { row: Row<User> }) => (
          <UserActions user={row.original} onDelete={handleDelete} />
        ),
      };
    }
    return col;
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const users = await fetchUsers();
        setData(users);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={filteredColumns} data={data} />
    </div>
  );
}
