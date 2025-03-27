import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0A192F] shadow-md border-b border-gray-800 px-8">
      <div className="w-full flex justify-end items-center text-white py-3">
        {/* Navigation Links */}
        <div className="space-x-4 text-sm sm:text-base">
          <Link href="/" className="hover:text-teal-400 text-xl">🏠</Link>
          <Link href="/skills" className="hover:text-teal-400">Skills</Link>
          <Link href="/experience" className="hover:text-teal-400">Experience</Link>
          <Link href="/projects" className="hover:text-teal-400">Projects</Link>
          <Link href="/education" className="hover:text-teal-400">Education</Link>
          <Link href="/certifications" className="hover:text-teal-400">Certifications</Link>
          <a
            href="/Rajnish Kumar Srivastava.pdf"
            download
            className="hover:text-teal-400"
          >
            Resume
          </a>
          <Link href="/contact" className="hover:text-teal-400">Contact</Link>
          <Link href="/blog" className="hover:text-teal-400">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
