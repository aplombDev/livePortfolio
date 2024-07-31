import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-10" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          href="https://www.linkedin.com/in/aayush-joshi-dev10/"
          target="__blank"
        />
        <FaGithub
          href="https://github.com/aplombDev?tab=repositories"
          target="__blank"
        />
        <FaSquareXTwitter
          href="https://x.com/AayushJ04204134"
          target="__blank"
        />
        <FaBlogger href="https://aayushj2001.blogspot.com/" target="__blank" />
      </div>
    </div>
  );
};

export default Navbar;
