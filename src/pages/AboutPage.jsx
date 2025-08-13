import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaMobileAlt,
} from "react-icons/fa";

const AboutPage = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#113F67] w-6 h-6" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#34699A] w-6 h-6" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#58A0C8] w-6 h-6" /> },
    { name: "React", icon: <FaReact className="text-[#8FD5FF] w-6 h-6" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#113F67] w-6 h-6" /> },
    { name: "Responsive Design", icon: <FaMobileAlt className="text-[#34699A] w-6 h-6" /> },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8] py-16 min-h-screen text-[#F5F9FF]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#113F67] drop-shadow-lg">
          About Me
        </h2>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center text-[#8FD5FF] text-lg leading-relaxed">
          <p>
            I’m a Computer Science graduate passionate about building sleek,
            responsive, and user-friendly web interfaces. With strong front-end
            skills and a keen eye for design, I focus on creating seamless
            digital experiences. Constantly learning and adapting, I strive to
            bring innovation and quality to every project I work on.
          </p>
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto mb-20 bg-[#8FD5FF] bg-opacity-20 rounded-lg shadow-lg p-8 border border-[#34699A]">
          <h3 className="text-3xl font-semibold mb-8 text-[#113F67] border-b border-[#113F67] pb-3 drop-shadow-md">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-5 text-[#113F67]">
            {skills.map(({ name, icon }) => (
              <span
                key={name}
                className="flex items-center gap-2 bg-[#34699A] bg-opacity-50 text-[#F5F9FF] px-5 py-2 rounded-full font-semibold text-lg shadow-md hover:bg-[#113F67] transition cursor-default"
              >
                {icon}
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div className="max-w-4xl mx-auto mb-20 bg-[#8FD5FF] bg-opacity-20 rounded-lg shadow-lg p-8 border border-[#34699A]">
          <h3 className="text-3xl font-semibold mb-8 text-[#113F67] border-b border-[#113F67] pb-3 drop-shadow-md">
            Courses & Certifications
          </h3>
          <ul className="list-disc list-inside text-[#34699A] text-lg space-y-3">
            <li>Front-End Development with React</li>
            <p className="ml-4">Creative It Institute - 2025</p>
          </ul>
        </div>

        {/* Academic Results */}
        <div className="max-w-4xl mx-auto bg-[#8FD5FF] bg-opacity-20 rounded-lg shadow-lg p-8 border border-[#34699A]">
          <h3 className="text-3xl font-semibold mb-8 text-[#113F67] border-b border-[#113F67] pb-3 drop-shadow-md">
            Academic Results
          </h3>
          <ul className="space-y-6 text-[#34699A] text-lg">
            <li className="flex justify-between border-b border-[#34699A] pb-4 items-center">
              <span>
                <strong>SSC</strong>
              </span>
              <span>GPA 5.00, 2016, Alamdanga Girls High School, Chuadanga</span>
            </li>
            <li className="flex justify-between border-b border-[#34699A] pb-4 items-center">
              <span>
                <strong>HSC</strong>
              </span>
              <span>
                GPA 5.00, 2019, Armed Police Battalion Public School & College,
                Bogura
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>
                <strong>B.Sc in CSE</strong>
              </span>
              <span>
                CGPA 3.73, 2024, First Capital University of Bangladesh, Chuadanga
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
