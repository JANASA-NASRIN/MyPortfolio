import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaFigma 
} from "react-icons/fa";
import Container from "../components/Container";
import mycphoto from "../assets/mycphoto.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  // tech icons with custom glow colors
  const techIcons = [
    { id: 1, icon: <FaHtml5 className="text-orange-500 w-12 h-12" />, x: 130, y: -120, glow: "0 0 20px rgba(249,115,22,0.8)" },
    { id: 2, icon: <FaCss3Alt className="text-blue-500 w-12 h-12" />, x: -190, y: -100, glow: "0 0 20px rgba(59,130,246,0.8)" },
    { id: 3, icon: <FaJs className="text-yellow-400 w-12 h-12" />, x: -100, y: 90, glow: "0 0 20px rgba(250,204,21,0.8)" },
    { id: 4, icon: <FaReact className="text-cyan-400 w-12 h-12" />, x: 150, y: 140, glow: "0 0 20px rgba(34,211,238,0.8)" },
    { id: 5, icon: <FaBootstrap className="text-purple-600 w-12 h-12" />, x: -160, y: 30, glow: "0 0 20px rgba(147,51,234,0.8)" },
    { id: 6, icon: <FaFigma className="text-pink-500 w-12 h-12" />, x: 190, y: 30, glow: "0 0 20px rgba(236,72,153,0.8)" },
  ];

  return (
    <section className="py-16 min-h-screen bg-black text-[#EAE4D5] overflow-hidden">
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-10">
          
          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="max-w-lg z-20 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-4 font-poppins text-[#5682B1]">
              Hi, I'm <span className="text-[#FFE8DB]">Janasa Ara Nasrin</span>
            </h1>

            <h2 className="text-3xl font-semibold mb-2 font-poppins text-[#5682B1]">
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
                <button className="bg-[#5682B1] hover:bg-[#34699A] transition text-[#FFE8DB] font-semibold py-3 px-8 rounded-lg shadow-lg">
                  Contact Me
                </button>
              </Link>
              <a
                href="/JANASA ARA NASRIN-Resume.pdf"
                download="Janasa_Ara_Nasrin_CV.pdf"
                className="px-6 py-3 border border-[#FFE8DB] text-[#FFE8DB] font-semibold rounded hover:bg-[#FFE8DB] hover:text-[#113F67] hover:shadow-lg transition text-center"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/JANASA-NASRIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#FFE8DB] transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/janasa-nasrin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#FFE8DB] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/jenesa2711"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#FFE8DB] transition"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE + ANIMATED ICONS */}
          <motion.div
            className="relative max-w-md flex justify-center items-center min-h-[500px] w-[400px]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Your Photo */}
            <img
              src={mycphoto}
              alt="Janasa Ara Nasrin"
              className="rounded-2xl relative z-10 max-w-[200px] h-auto ml-4 shadow-lg"
            />

            {/* Tech Icons Animation */}
            {techIcons.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  x: item.x, 
                  y: item.y, 
                  scale: 1,
                  y: [item.y, item.y - 15, item.y], // floating up & down
                }}
                transition={{ 
                  duration: 3, 
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -15, 15, 0],
                  filter: `drop-shadow(${item.glow})` 
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                style={{
                  filter: item.glow
                }}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-[#58A0C8]/20 to-transparent rounded-full blur-3xl z-0"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
