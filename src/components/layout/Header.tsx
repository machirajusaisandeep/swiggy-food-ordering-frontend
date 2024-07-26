import { Link } from "react-router-dom";
import swiggyLogo from "/swiggyLogo.svg";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <div className="py-4 border bottom-1">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={swiggyLogo} alt="Swiggy Food ordering logo" />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
      </div>
    </div>
  );
};

export default Header;