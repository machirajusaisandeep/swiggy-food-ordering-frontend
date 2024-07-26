import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";

const DesktopNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
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
