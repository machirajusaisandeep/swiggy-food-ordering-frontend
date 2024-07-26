import AppStore from "../../assets/app_store.avif";
import PlayStore from "../../assets/play_store.avif";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="py-4 bg-black text-white">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0">
          <p className="text-xl text-center md:text-start">Swiggy</p>
          <div className="flex flex-col md:flex-row space-x-4 items-center">
            <p className="text-sm">For better experience download app :</p>
            <img src={AppStore} className="h-12" alt="App Store" />
            <Separator
              orientation="vertical"
              className="hidden md:block bg-gray-400"
            />
            <img src={PlayStore} className="h-12" alt="play Store" />
          </div>
        </div>
        <p className="text-center text-sm">
          © Not Official Swiggy. So All rights not reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
