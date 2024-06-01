import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container px-8">
      <nav className="flex  flex-col items-center gap-8 justify-center py-12 ">
        <span className="font-bold text-xl">GYMFIT</span>

        <div className="flex gap-4 items-center cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <BsTwitterX />
          <FaLinkedin />
          <FaYoutube />
        </div>
        <p>© 2024 Gym Fit. All rights reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;
