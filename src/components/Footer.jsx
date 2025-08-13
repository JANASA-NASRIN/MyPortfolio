import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaHome, 
  FaUser, 
  FaProjectDiagram, 
  FaEnvelope 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#113F67] text-[#AED6F1] py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Left side - Branding */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Jenesa Ara Nasrin. All rights reserved.</p>

        {/* Middle - Navigation Icons */}
        <nav className="flex space-x-6 my-4 md:my-0" aria-label="Footer navigation">
          <a href="/" className="hover:text-[#58A0C8]" aria-label="Home">
            <FaHome size={20} />
          </a>
          <a href="/about" className="hover:text-[#58A0C8]" aria-label="About">
            <FaUser size={20} />
          </a>
          <a href="/projects" className="hover:text-[#58A0C8]" aria-label="Projects">
            <FaProjectDiagram size={20} />
          </a>
          <a href="/contact" className="hover:text-[#58A0C8]" aria-label="Contact">
            <FaEnvelope size={20} />
          </a>
        </nav>

        {/* Right side - Social Links */}
        <div className="flex space-x-4">
          <a 
            href="https://github.com/JANASA-NASRIN" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="hover:text-[#58A0C8]"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/janasa-nasrin" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="hover:text-[#58A0C8]"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://facebook.com/janasa2711" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="hover:text-[#58A0C8]"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
