import { Check, X } from "lucide-react"; // Import the icons from lucide-react
import { Button } from "@/components/ui/button"; // Import your button component or use plain HTML button
import { Transaction } from "./columns";

type TransactionActionsProps = {
  transaction: Transaction;
  currentUserId: number; // Pass the current user ID to determine their role
  onAccept: (transaction: Transaction) => void;
  onReject: (transaction: Transaction) => void;
  onCancel: (transaction: Transaction) => void; // Add a cancel handler
};

export default function TransactionActions({
  transaction,
  currentUserId,
  onAccept,
  onReject,
  onCancel,
}: TransactionActionsProps) {
  const isSalesperson = transaction.salespersonId === currentUserId;
  const isCustomer = transaction.userId === currentUserId;

  return (
    <div className="flex space-x-2">
      {isSalesperson && (
        <>
          <Button
            variant="ghost"
            onClick={() => onAccept(transaction)}
            className="text-green-500"
          >
            <Check />
          </Button>
          <Button
            variant="ghost"
            onClick={() => onReject(transaction)}
            className="text-red-500"
          >
            <X />
          </Button>
        </>
      )}
      {isCustomer && (
        <Button
          variant="ghost"
          onClick={() => onCancel(transaction)}
          className="text-yellow-500"
        >
          Cancel
        </Button>
      )}
    </div>
  );
}
