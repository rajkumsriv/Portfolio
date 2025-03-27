import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen flex items-center justify-center bg-[#0A192F] text-white px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Rajnish Kumar Srivastava
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-teal-300">
          Information Security Lead | SOC & Cybersecurity Expert
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          📍 Based in Germany &nbsp;&nbsp;|&nbsp;&nbsp;
          📧{" "}
          <a
            href="mailto:rajkumsriv@outlook.com"
            className="underline hover:text-blue-300"
          >
            rajkumsriv@outlook.com
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp; 📱{" "}
          <a
            href="tel:+491623493932"
            className="underline hover:text-blue-300"
          >
            +49 162 3493932
          </a>
        </p>

        <p className="text-md md:text-lg mb-8 text-gray-400">
          I am an experienced Information Security Lead with over 11 years of
          hands-on expertise in building and managing Security Operations
          Centers (SOC), incident response, threat detection, and vulnerability
          management.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium text-center"
          >
            Contact Me
          </Link>
          <a
            href="/RajnishSrivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-2 rounded-md font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Page Links */}
        <div className="mt-8 space-y-2 text-teal-400 underline hover:text-teal-200">
          <div>
            <Link href="/experience">View My Experience →</Link>
          </div>
          <div>
            <Link href="/skills">View My Skills →</Link>
          </div>
          <div>
            <Link href="/certifications">View My Certifications →</Link>
          </div>
          <div>
            <Link href="/projects">View My Projects →</Link>
          </div>
          <div>
            <Link href="/education">View My Education →</Link>
          </div>
          <div>
            <Link href="/contact">Contact Me →</Link>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
