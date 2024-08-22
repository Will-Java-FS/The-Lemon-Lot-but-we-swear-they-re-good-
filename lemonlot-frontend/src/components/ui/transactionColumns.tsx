import {ColumnDef} from "@tanstack/react-table"

export type Transaction = {
    transaction_id : number
    user_id : number
    salesperson_id : number
    car_id : number
    date : string
    amount : number
    status : string
    payment_method : string
    offer_amount : string
    comments : string
    created_at : string
    updated_at : string
}

const columns : ColumnDef<Transaction>[] = [
    {
        accessorKey: "transaction_id",
        header: "Transaction ID",
    },
    {
        accessorKey: "user_id",
        header: "User ID",
    },
    {
        accessorKey: "salesperson_id",
        header: "Salesperon ID",
    },
    {
        accessorKey: "car_id",
        header: "Car ID",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "payment_method",
        header: "Payment Method",
    },
    {
        accessorKey: "offer_amount",
        header: "Offer Amount",
    },
    {
        accessorKey: "comments",
        header: "Comments",
    },
    {
        accessorKey: "created_at",
        header: "Created At",
    },
    {
        accessorKey: "updated_at",
        header: "Updated At",
    }
]
export default columns;
