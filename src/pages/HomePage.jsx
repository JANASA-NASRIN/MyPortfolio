import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Container from "../components/Container";
import myphoto2 from "../assets/myphoto2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const HomePage = () => {
  return (
    <section
      className="py-16 text-white min-h-screen"
      style={{
        background:
          "linear-gradient(to right, #4B0082 0%, #0A0A0A 60%, #000000 100%)",
      }}
    >
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-10">
          <motion.div
            className="max-w-lg"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-bold text-[#F5F5F5] leading-tight mb-4 font-poppins">
              Hi, I'm Janasa Ara Nasrin
            </h1>

            <h2 className="text-3xl font-semibold mb-2 text-[#C850FF] font-poppins">
              Front End Developer
            </h2>

            <p className="text-lg text-gray-300 mb-6 font-poppins mt-4">
              Passionate about creating responsive and user-friendly websites
              using HTML, CSS, and JavaScript. Skilled in React and Tailwind CSS
              to build clean, modern interfaces that deliver great user
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-6 font-poppins">
              <Link to="/contact">
                <button className="bg-purple-700 hover:bg-purple-800 transition text-white font-semibold py-3 px-8 rounded-lg">
                  Contact Me
                </button>
              </Link>
              <a
                href=""
                download
                className="px-6 py-3 border border-[#A020F0] text-[#A020F0] font-semibold rounded hover:bg-[#A020F0] hover:text-white hover:drop-shadow-[0_0_5px_#A020F0] transition text-center"
              >
                Download CV
              </a>
            </div>

            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/JANASA-NASRIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0] transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/janasa-nasrin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/jenesa2711"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#A020F0] hover:drop-shadow-[0_0_5px_#A020F0] transition"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={myphoto2} alt="Janasa Ara Nasrin" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
