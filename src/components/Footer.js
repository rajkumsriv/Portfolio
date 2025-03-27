export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-gray-400 text-sm py-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-2 sm:mb-0">
          © {new Date().getFullYear()} Rajnish Srivastava. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:rajkumsriv@outlook.com"
            className="hover:text-teal-400 underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/rajnish-kumar-srivastava-3096b5130"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
