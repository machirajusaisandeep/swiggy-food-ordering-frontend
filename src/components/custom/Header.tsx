import { Link } from "react-router-dom";
import swiggyLogo from "/swiggyLogo.svg";

const Header = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={swiggyLogo} alt="Swiggy Food ordering logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
