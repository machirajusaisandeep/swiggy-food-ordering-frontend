import { Link } from "react-router-dom";
import swiggySmallLogo from "/swiggySmallLogo.svg";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <div className="py-4 border bottom-1">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={swiggySmallLogo}
            alt="Swiggy Food ordering logo"
            className="h-12"
          />
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
