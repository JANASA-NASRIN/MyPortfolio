import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(to right, #113F67 0%, #34699A 50%, #58A0C8 100%)",
      }}
      className="px-6 py-4 shadow-lg"
    >
      <Container>
        <div className="flex justify-between items-center max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="ml-10 text-2xl font-bold flex items-center gap-2 text-[#A5F3FC] hover:text-[#89CFF0] transition duration-300"
          >
            *Janasa*
          </Link>

          {/* Menu */}
          <ul className="flex gap-8 font-medium text-[#D6E6F2]">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 transition duration-300 hover:text-[#89CFF0] hover:drop-shadow-[0_0_8px_#89CFF0]"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 transition duration-300 hover:text-[#89CFF0] hover:drop-shadow-[0_0_8px_#89CFF0]"
              >
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center gap-2 transition duration-300 hover:text-[#89CFF0] hover:drop-shadow-[0_0_8px_#89CFF0]"
              >
                <FaCode /> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 transition duration-300 hover:text-[#89CFF0] hover:drop-shadow-[0_0_8px_#89CFF0]"
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
