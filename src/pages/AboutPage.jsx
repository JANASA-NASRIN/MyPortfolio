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
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-purple-400 w-6 h-6" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-6 h-6" /> },
    { name: "React", icon: <FaReact className="text-purple-500 w-6 h-6" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-6 h-6" /> },
    { name: "Responsive Design", icon: <FaMobileAlt className="text-pink-400 w-6 h-6" /> },
  ];

  return (
    
    <section id="about" className="bg-gradient-to-br from-black via-purple-900 to-purple-800 py-16 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-purple-400 drop-shadow-lg">
          About Me
        </h2>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center text-gray-300 text-lg leading-relaxed">
          <p>
            I’m a Computer Science graduate passionate about building sleek, responsive, and user-friendly web interfaces. With strong front-end skills and a keen eye for design, I focus on creating seamless digital experiences. Constantly learning and adapting, I strive to bring innovation and quality to every project I work on.
          </p>
        </div>

        {/* Academic Results */}
        <div className="max-w-4xl mx-auto mb-20 bg-purple-900 bg-opacity-30 rounded-lg shadow-lg p-8 border border-purple-700">
          <h3 className="text-3xl font-semibold mb-8 text-purple-300 border-b border-purple-600 pb-3 drop-shadow-md">
            Academic Results
          </h3>
          <ul className="space-y-6 text-gray-300 text-lg">
            <li className="flex justify-between border-b border-purple-700 pb-4">
              <span><strong>SSC</strong></span>
              <span>GPA 5.00, 2016, Alamdanga Girls High School,Chuadanga</span>
            </li>
            <li className="flex justify-between border-b border-purple-700 pb-4">
              <span><strong>HSC</strong></span>
              <span>GPA 5.00, 2019, Armed Police Battelion Public School & College, Bogura</span>
            </li>
            <li className="flex justify-between">
              <span><strong>B.Sc in CSE</strong></span>
              <span>CGPA 3.73,2024, First Capital University of Bangladesh,Chuadanga</span>
            </li>
          </ul>
        </div>

        {/* Courses & Certifications */}
        <div className="max-w-4xl mx-auto mb-20 bg-purple-900 bg-opacity-30 rounded-lg shadow-lg p-8 border border-purple-700">
          <h3 className="text-3xl font-semibold mb-8 text-purple-300 border-b border-purple-600 pb-3 drop-shadow-md">
            Courses & Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-3">
            <li >Front-End Development with React</li>
            <p className="ml-4"> Creative It Inistitute-2025</p>
          </ul>
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto mb-20 bg-purple-900 bg-opacity-30 rounded-lg shadow-lg p-8 border border-purple-700">
          <h3 className="text-3xl font-semibold mb-8 text-purple-300 border-b border-purple-600 pb-3 drop-shadow-md">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {skills.map(({ name, icon }) => (
              <span
                key={name}
                className="flex items-center gap-2 bg-purple-700 bg-opacity-50 text-purple-200 px-5 py-2 rounded-full font-semibold text-lg shadow-md hover:bg-purple-600 transition cursor-default"
              >
                {icon}
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

   
  );
};

export default AboutPage;
