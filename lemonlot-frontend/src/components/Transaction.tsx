import axios from "axios";
import { useEffect, useState } from "react";
import { Transaction } from "./ui/transactionColumns";
import columns from "./ui/transactionColumns";

import { DataTable } from "@/components/ui/data-table";
import { log } from "console";

const TransactionsComponent : React.FC = () =>
{
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getDataAll = async () => {
        try {
            const responseAll = await axios.get<{results : Transaction[]}>('http://localhost:8080/api/Transactions');
            console.log(responseAll.data);
            setTransactions(responseAll.data.results);
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setError('Failed to fetch transactions');
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        getDataAll();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={transactions} />
        </div>
      );
}

export default TransactionsComponent;
// async function getData() : Promise<Transaction[]>
// {
//     const[transactions, setTransactions] = useState([]);

//     const getDataAll = async () => {
//         const responseAll = await axios.get(
//             "http://localhost:8080/api/Transactions"
//         );
//         console.log(responseAll.data);
//         setTransactions(responseAll.data.results);
//         return responseAll.data;
//     }
// }

// export default async function DemoPage() {
//     const[transactions, setTransactions] = useState([]);

//     const getDataAll = async () => {
//         const responseAll = await axios.get(
//             "http://localhost:8080/api/Transactions"
//         );
//         console.log(responseAll.data);
//         setTransactions(responseAll.data.results);
//     const data = await getData()

//     return(
//         <div className="container mx-auto py-10">
//             <DataTable columns={columns} data={data} />
//         </div>
//     )
// }

// export default function Transaction()
// {
//     const[transactions, setTransactions] = useState([]);

//     const getDataAll = async () => {
//         const responseAll = await axios.get(
//             "http://localhost:8080/api/Transactions"
//         );
//         console.log(responseAll.data);
//         setTransactions(responseAll.data.results);
//     }

//     return(
//         <> 
//         <button onClick={getDataAll}>Get All Transations</button>          
//         <table>
//             <tr>
//                 <th>Transaction ID</th>
//                 <th>User ID</th>
//                 <th>Salesperson ID</th>
//                 <th>Car ID</th>
//                 <th>Transaction Date</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//                 <th>Payment Method</th>
//                 <th>Offer Amount</th>
//                 <th>Comments</th>
//                 <th>Created At</th>
//                 <th>Updated At</th>
//             </tr>
//             <tbody>
//                 {
//                     transactions && transactions.map
//                     && transactions.map((transaction, index) => (
//                         <tr key = {transaction.transaction_id}>
//                             <td>{index}</td>
//                             <td>{transaction.transaction_id}</td>
//                             <td>{transaction.user_id}</td>
//                             <td>{transaction.salesperson_id}</td>
//                             <td>{transaction.car_id}</td>
//                             <td>{transaction.transaction_date}</td>
//                             <td>{transaction.amount}</td>
//                             <td>{transaction.status}</td>
//                             <td>{transaction.payment_method}</td>
//                             <td>{transaction.offer_amount}</td>
//                             <td>{transaction.comments}</td>
//                             <td>{transaction.created_at}</td>
//                             <td>{transaction.updated_at}</td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </table>
        
//         </>
//     )

// }