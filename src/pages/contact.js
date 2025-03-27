export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Contact Me
        </h1>

        {/* Contact Info */}
        <div className="text-center mb-10 space-y-2">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:rajkumsriv@outlook.com"
              className="underline text-blue-400 hover:text-blue-300"
            >
              rajkumsriv@outlook.com
            </a>
          </p>
          <p>
            📱 Phone:{" "}
            <a
              href="tel:+491623493932"
              className="underline text-blue-400 hover:text-blue-300"
            >
              +49 162 3493932
            </a>
          </p>
          <p>
            🌐 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/rajnish-kumar-srivastava-3096b5130"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              linkedin.com/in/rajnish-kumar-srivastava-3096b5130
            </a>
          </p>
          <p>
            📄{" "}
            <a
              href="/Rajnish Kumar Srivastava.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-4 py-1 rounded-md inline-block mt-2"
            >
              Download My Resume
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="bg-[#112240] p-6 rounded-lg space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission coming soon!");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-[#0A192F] border border-gray-600 text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-[#0A192F] border border-gray-600 text-white"
            required
          />
          <textarea
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
      </div>
    </main>
  );
}
