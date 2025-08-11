import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-purple-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Left side - Branding */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Jenesa Ara Nasrin. All rights reserved.</p>

        {/* Middle - Navigation Icons */}
        <div className="flex space-x-6 my-4 md:my-0">
          <a href="/" className="hover:text-white">
            <FaHome size={20} />
          </a>
          <a href="/about" className="hover:text-white">
            <FaUser size={20} />
          </a>
          <a href="/projects" className="hover:text-white">
            <FaProjectDiagram size={20} />
          </a>
          <a href="/contact" className="hover:text-white">
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Right side - Social Links */}
        <div className="flex space-x-4">
          <a href="https://github.com/JANASA-NASRIN" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/janasa-nasrin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-white" />
          </a>
          <a href="https://facebook.com/janasa2711" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
