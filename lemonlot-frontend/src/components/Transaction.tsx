import axios from "axios";
import { useState } from "react";

export default function Transaction()
{
    const[transactions, setTransactions] = useState([]);

    const getDataAll = async () => {
        const responseAll = await axios.get(
            "http://localhost:8080/api/Transactions"
        );

        setTransactions(responseAll.data.results);
    }

    return(
        <> 
        <button onClick={getDataAll}>Get All Transations</button>          
        <table>
            <tr>
                <th>Transaction ID</th>
                <th>User ID</th>
                <th>Salesperson ID</th>
                <th>Car ID</th>
                <th>Transaction Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Method</th>
                <th>Offer Amount</th>
                <th>Comments</th>
                <th>Created At</th>
                <th>Updated At</th>
            </tr>
            <tbody>
                {
                    transactions && transactions.map
                    && transactions.map((transaction, index) => (
                        <tr key = {transaction.transaction_id}>
                            <td>{index}</td>
                            <td>{transaction.transaction_id}</td>
                            <td>{transaction.user_id}</td>
                            <td>{transaction.salesperson_id}</td>
                            <td>{transaction.car_id}</td>
                            <td>{transaction.transaction_date}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.status}</td>
                            <td>{transaction.payment_method}</td>
                            <td>{transaction.offer_amount}</td>
                            <td>{transaction.comments}</td>
                            <td>{transaction.created_at}</td>
                            <td>{transaction.updated_at}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
        </>
    )

}