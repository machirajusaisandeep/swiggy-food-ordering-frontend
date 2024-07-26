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
        <SheetDescription className="flex">
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
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
