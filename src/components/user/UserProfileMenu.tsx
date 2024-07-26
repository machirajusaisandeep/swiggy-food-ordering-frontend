import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const UserProfileMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center space-x-2">
          <CircleUserRound />
          <span> {user?.name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <Separator className="my-2" />
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-orange-500"
            onClick={() => logout()}
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileMenu;
