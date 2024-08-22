import React from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";
import { User } from "./columns"; // Adjust the import path as needed

interface UserActionsProps {
  user: User;
  onDelete: (user: User) => void;
}

const UserActions: React.FC<UserActionsProps> = ({ user, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-user/${user.id}`);
  };

  const handleDelete = () => {
    onDelete(user);
  };

  return (
    <div>
      <button onClick={handleEdit} className="p-2 text-blue-500">
        <Pencil className="w-5 h-5" />
      </button>
      <button onClick={handleDelete} className="p-2 text-red-500">
        <Trash className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserActions;
