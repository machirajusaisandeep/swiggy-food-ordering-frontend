import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          {isAuthenticated ? (
            <span>{user?.name}</span>
          ) : (
            <span>Welcome to Swiggy!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex mt-4">
          <div className="flex flex-col space-y-8">
            <Link to="/faq">FAQ</Link>
            {isAuthenticated ? (
              <Button
                variant="default"
                className="flex-1 font-bold bg-orange-500"
                onClick={() => logout()}
              >
                Log out
              </Button>
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
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
