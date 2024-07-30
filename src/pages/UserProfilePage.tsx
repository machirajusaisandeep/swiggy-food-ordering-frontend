import { useGetCurrentUser, useUpdateCurrentUser } from "@/api/UserApi";
import UserProfileForm from "@/components/user/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateCurrentUser();
  const { currentUser, isLoading: isGetLoading } = useGetCurrentUser();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>Unable to load user or User not found</div>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isUpdateLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
