
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="bg-[#0A0A0A] text-white px-6 py-4 shadow-lg">
      <Container>
        <div className="flex justify-between items-center max-w-[1440px] mx-auto">
          
          {/* Logo */}
          <Link
            to="/"
            className=" ml-10 text-2xl font-bold flex items-center gap-2 text-[#A020F0] hover:text-[#C850FF] transition duration-300"
          >
            *Janasa*
          </Link>

          {/* Menu */}
          <ul className="flex gap-8 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 transition duration-300 hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0]"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 transition duration-300 hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0]"
              >
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center gap-2 transition duration-300 hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0]"
              >
                <FaCode /> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 transition duration-300 hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0]"
              >
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
