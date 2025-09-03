import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12">

        {/* Left Column - Info/Intro */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-[#5682B1]">Get in Touch</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.  
            Fill out the form and I’ll get back to you as soon as possible!
          </p>
          <p className="text-gray-400">
            Email: <span className="text-[#5682B1]">nasrinjanasa@gmail.com</span><br/>
            Phone: <span className="text-[#5682B1]">01742901588</span>
          </p>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="md:w-1/2 bg-zinc-900 rounded-xl p-8 shadow-lg border border-zinc-700"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-[#FFE8DB] font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-20 border border-gray-700 text-[#FFE8DB] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5682B1]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-[#FFE8DB] font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-20 border border-gray-700 text-[#FFE8DB] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5682B1]"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-[#FFE8DB] font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-20 border border-gray-700 text-[#FFE8DB] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5682B1]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#5682B1] text-black font-semibold rounded-md hover:bg-[#FFE8DB] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactPage;
