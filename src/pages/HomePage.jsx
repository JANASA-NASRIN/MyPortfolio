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
    <section className="py-16 min-h-screen bg-black text-[#FDF5E6]">
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-10">
          {/* Left side content */}
          <motion.div
            className="max-w-lg"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-bold leading-tight mb-4 font-poppins text-[#FDF5AA]">
              Hi, I'm <span className="text-[#58A0C8]">Janasa Ara Nasrin</span>
            </h1>

            <h2 className="text-3xl font-semibold mb-2 font-poppins text-[#FDF5AA]">
              Front End Developer
            </h2>

            <p className="text-lg text-gray-400 mb-6 font-poppins mt-4 leading-relaxed">
              I craft responsive and user-friendly websites with a touch of
              creativity. From HTML & CSS to modern React and Tailwind
              interfaces, I aim for clean, functional, and elegant user
              experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6 font-poppins">
              <Link to="/contact">
                <button className="bg-[#58A0C8] hover:bg-[#34699A] transition text-white font-semibold py-3 px-8 rounded-lg shadow-lg">
                  Contact Me
                </button>
              </Link>
              <a
                href="/JANASA ARA NASRIN.pdf"  // Link to CV in public folder
                download="Janasa_Ara_Nasrin_CV.pdf"
                className="px-6 py-3 border border-[#FDF5AA] text-[#FDF5AA] font-semibold rounded hover:bg-[#FDF5AA] hover:text-[#113F67] hover:shadow-lg transition text-center"
              >
                Download CV
              </a>
            </div>

            {/* Social icons */}
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/JANASA-NASRIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#FDF5AA] transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/janasa-nasrin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#FDF5AA] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/jenesa2711"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#FDF5AA] transition"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={myphoto2}
              alt="Janasa Ara Nasrin"
              className=" rounded-3xl "
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
