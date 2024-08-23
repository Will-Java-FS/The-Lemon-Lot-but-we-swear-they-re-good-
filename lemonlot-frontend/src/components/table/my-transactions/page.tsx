// TransactionTable.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "@/components/ui/data-table"; // Adjust the path as needed
import { Transaction, columns } from "./columns";
import { useLocalStorage } from "usehooks-ts";
import { getSub } from "@/lib/authUtil";

const fetchMyTransactions = async (
  currentUserId: number
): Promise<Transaction[]> => {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API_URL}/transactions`);

    // Filter transactions by currentUserId
    const filteredTransactions = response.data.filter(
      (transaction: Transaction) => transaction.userId === currentUserId
    );

    return filteredTransactions;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function TransactionTable() {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token] = useLocalStorage("auth_token", "");

  useEffect(() => {
    const loadData = async () => {
      try {
        const userIdString = getSub(token);
        const userId = userIdString ? parseInt(userIdString, 10) : 0;
        const transactions = await fetchMyTransactions(userId);
        setData(transactions);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
