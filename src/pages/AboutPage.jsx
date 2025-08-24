import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-6 h-6" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-6 h-6" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-6 h-6" /> },
  { name: "Responsive Design", icon: <FaMobileAlt className="text-green-400 w-6 h-6" /> },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const AboutPage = () => {
  return (
    <section id="about" className="bg-black py-16 min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side - Introduction & Courses */}
          <motion.div
            className="md:w-1/2 space-y-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {/* Introduction */}
            <div className="text-gray-300 text-lg leading-relaxed">
              <p>
                I’m a Computer Science graduate passionate about building sleek,
                responsive, and user-friendly web interfaces. With strong front-end
                skills and a keen eye for design, I focus on creating seamless
                digital experiences. Constantly learning and adapting, I strive to
                bring innovation and quality to every project I work on.
              </p>
            </div>

            {/* Courses & Certifications */}
            <div className="bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-700">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400 border-b border-zinc-700 pb-2">
                Courses & Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
                <li>
                  Front-End Development with React
                  <p className="ml-4 text-sm text-gray-400">Creative IT Institute - 2025</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            className="md:w-1/2 flex flex-col items-center justify-center space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 border-b border-zinc-700 pb-2">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map(({ name, icon }) => (
                <motion.span
                  key={name}
                  className="flex items-center gap-2 bg-zinc-800 text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-md border border-zinc-700 cursor-default"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
