import logo from "../assets/MM.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
        <div className="m8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/michaelangelo-medina" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/MichaelMedina28"><FaGithub /></a>
            <a href=""><FaSquareXTwitter /></a>
            <a href=""><FaInstagram /></a>
        </div>
        
    </nav>
  );
};

export default Navbar