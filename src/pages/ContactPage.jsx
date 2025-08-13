import React, { useState } from "react";

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

  return (
    <section
      className="min-h-[70vh] bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8] flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-md w-full bg-[#89CFF0] bg-opacity-10 rounded-xl p-8 shadow-lg border border-[#34699A]">
        <h2 className="text-3xl font-bold text-[#113F67] mb-8 text-center font-poppins">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-[#34699A] font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-[#34699A] text-[#113F67] placeholder-[#89CFF0] focus:outline-none focus:ring-2 focus:ring-[#89CFF0]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[#34699A] font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-[#34699A] text-[#113F67] placeholder-[#89CFF0] focus:outline-none focus:ring-2 focus:ring-[#89CFF0]"
              placeholder="Your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-[#34699A] font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-[#34699A] text-[#113F67] placeholder-[#89CFF0] focus:outline-none focus:ring-2 focus:ring-[#89CFF0]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#58A0C8] hover:bg-[#34699A] text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
