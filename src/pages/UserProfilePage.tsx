import { useUpdateCurrentUser } from "@/api/UserApi";
import UserProfileForm from "@/components/user/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateCurrentUser();
  return (
    <div>
      <UserProfileForm onSave={updateUser} isLoading={isLoading} />
    </div>
  );
};

export default UserProfilePage;
