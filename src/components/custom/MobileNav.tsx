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
  const { loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>Welcome to Swiggy</span>
        </SheetTitle>
        <Separator />
        <SheetDescription>
          <Button
            variant="default"
            className="flex-1 font-bold bg-orange-500"
            onClick={() => loginWithRedirect()}
          >
            Log in
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
