import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container">
      <nav className="flex justify-between">
        <span className="font-bold">GymFIT</span>

        <ul className="flex gap-4 items-center">
          <li className="font-bold">Fitness Tips</li>
          <li className="font-bold">Fitness Tips</li>
          <li className="font-bold">Fitness Tips</li>
          <li className="font-bold">Fitness Tips</li>
          <li className="font-bold">Fitness Tips</li>
          <li className="font-bold">Fitness Tips</li>
        </ul>

        <div className="flex gap-4 items-center">
          <FaFacebook />
          <FaInstagram />
          <BsTwitterX />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
