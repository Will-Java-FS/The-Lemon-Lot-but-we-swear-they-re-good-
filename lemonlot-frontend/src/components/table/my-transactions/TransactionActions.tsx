// TransactionActions.tsx
import React from "react";
import { Transaction } from "./columns";
import { Check, X } from "lucide-react";

interface TransactionActionsProps {
  transaction: Transaction;
  onAccept: (transaction: Transaction) => void;
  onReject: (transaction: Transaction) => void;
}

const TransactionActions: React.FC<TransactionActionsProps> = ({
  transaction,
  onAccept,
  onReject,
}) => {
  return (
    <div className="flex space-x-2">
      <Check
        onClick={() => onAccept(transaction)}
        className="text-green-500 cursor-pointer"
        size={24} // Adjust the size as needed
      />
      <X
        onClick={() => onReject(transaction)}
        className="text-red-500 cursor-pointer"
        size={24} // Adjust the size as needed
      />
    </div>
  );
};

export default TransactionActions;
