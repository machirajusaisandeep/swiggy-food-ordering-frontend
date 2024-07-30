import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";
import UserProfileMenu from "../user/UserProfileMenu";
import { Link } from "react-router-dom";
import { HelpCircleIcon } from "lucide-react";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex gap-8">
      <Link to="/faq" className="flex items-center gap-2">
        <HelpCircleIcon /> FAQ
      </Link>
      {isAuthenticated ? (
        <UserProfileMenu />
      ) : (
        <Button
          variant="default"
          className="flex-1 font-bold bg-orange-500"
          onClick={() => loginWithRedirect()}
        >
          Log in
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;
