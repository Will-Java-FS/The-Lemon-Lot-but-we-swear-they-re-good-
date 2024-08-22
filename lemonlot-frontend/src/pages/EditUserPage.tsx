import { useParams } from "react-router-dom";
import EditUserForm from "@/components/EditUserForm";

const EditUserPage: React.FC = () => {
  // Use the `useParams` hook to get the `userId` from the URL
  const { userId } = useParams<{ userId: string }>();

  // Ensure `userId` is present and is a valid number
  const userIdNumber = userId ? parseInt(userId, 10) : null;

  return (
    <div className="edit-user-page">
      <h1 className="mb-8 text-2xl font-bold">Edit User</h1>
      {/* Pass the `userId` to the `EditUserForm` component */}
      {userIdNumber ? (
        <EditUserForm />
      ) : (
        <div>User ID is missing or invalid!</div>
      )}
    </div>
  );
};

export default EditUserPage;
