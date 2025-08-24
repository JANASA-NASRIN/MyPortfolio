import React from "react";
import { motion } from "framer-motion";
import agence from "../assets/agence.png";
import Test from "../assets/Test.png";
import myportfolio from "../assets/myportfolio.png";

const projects = [
  {
    id: 1,
    title: "Agence",
    description: "A modern agency website built with HTML, CSS, JS, and Bootstrap.",
    imgUrl: agence,
    link: "https://github.com/JANASA-NASRIN",
  },
  {
    id: 2,
    title: "My Portfolio",
    description: "Personal portfolio showcasing projects and skills.",
    imgUrl: myportfolio,
    link: "https://github.com/JANASA-NASRIN",
  },
  {
    id: 3,
    title: "Test",
    description: "A test project for practicing React components and styling.",
    imgUrl: Test,
    link: "https://github.com/JANASA-NASRIN",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="bg-black py-20 min-h-screen text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-yellow-400 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map(({ id, title, description, imgUrl, link }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden shadow-lg bg-zinc-900 border border-zinc-700 hover:border-yellow-400 transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-48 md:h-56 object-cover object-top transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2 border-b border-zinc-700 inline-block pb-1">
                  {title}
                </h3>
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
