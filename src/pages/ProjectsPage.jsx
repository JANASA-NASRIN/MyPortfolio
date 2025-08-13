import React from "react";
import agence from "../assets/agence.png";
import Test from "../assets/Test.png";
import myportfolio from "../assets/myportfolio.png";

const projects = [
  {
    id: 1,
    title: "Agence",
    description: "A modern agency website built with HTML,CSS,JS and Bootstrap.",
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

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8] py-20 min-h-screen text-[#F5F9FF]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#113F67] drop-shadow-lg">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map(({ id, title, description, imgUrl, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-2xl bg-[#8FD5FF] bg-opacity-20 border border-[#34699A] hover:bg-opacity-40 transition"
            >
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-36 md:h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                <h3 className="text-2xl font-bold text-[#113F67] mb-1 border-b-2 border-[#34699A] inline-block pb-1">
                  {title}
                </h3>
                <p className="text-[#34699A] italic text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
