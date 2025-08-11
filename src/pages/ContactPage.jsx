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
   
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-800 flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-purple-900 bg-opacity-40 rounded-lg p-8 shadow-2xl border border-purple-700">
        <h2 className="text-4xl font-extrabold text-purple-300 mb-6 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-purple-200 font-semibold"
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
              className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-purple-600 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-purple-200 font-semibold"
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
              className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-purple-600 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-purple-200 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-purple-600 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  
  );
};

export default ContactPage;

