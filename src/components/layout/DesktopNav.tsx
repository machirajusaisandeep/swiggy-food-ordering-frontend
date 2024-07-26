import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";
import UserProfileMenu from "../user/UserProfileMenu";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <UserProfileMenu />
  ) : (
    <Button
      variant="default"
      className="flex-1 font-bold bg-orange-500"
      onClick={() => loginWithRedirect()}
    >
      Log in
    </Button>
  );
};

export default DesktopNav;
