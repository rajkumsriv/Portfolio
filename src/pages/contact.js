// src/pages/contact.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Contact Me
        </h1>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              fetch("https://formspree.io/f/mrgnqrpj", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              }).then((res) => {
                if (res.ok) setSubmitted(true);
              });
            }}
            className="bg-[#112240] p-6 rounded-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-[#0A192F] border border-gray-600 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-[#0A192F] border border-gray-600 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-2 rounded bg-[#0A192F] border border-gray-600 text-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-[#112240] p-6 rounded-lg text-center text-green-400 font-semibold">
            ✅ Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </motion.main>
  );
}
