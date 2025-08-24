import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 shadow-lg sticky top-0 z-50 bg-black/60 backdrop-blur-md">
      <Container>
        <div className="flex justify-between items-center max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="ml-10 text-2xl font-bold flex items-center gap-2 text-[#FDF5AA] hover:text-[#58A0C8] transition duration-300"
          >
            *Janasa*
          </Link>

          {/* Menu */}
          <ul className="flex gap-8 font-medium text-[#FDF5E6]">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 transition duration-300 hover:text-[#FDF5AA] hover:drop-shadow-[0_0_8px_#FDF5AA]"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 transition duration-300 hover:text-[#58A0C8] hover:drop-shadow-[0_0_8px_#58A0C8]"
              >
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center gap-2 transition duration-300 hover:text-[#FDF5AA] hover:drop-shadow-[0_0_8px_#FDF5AA]"
              >
                <FaCode /> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 transition duration-300 hover:text-[#58A0C8] hover:drop-shadow-[0_0_8px_#58A0C8]"
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
