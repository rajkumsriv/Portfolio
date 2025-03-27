import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0A192F] shadow-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo or Name */}
        <div className="text-xl font-bold text-teal-400">Rajnish</div>

        {/* Navigation Links */}
        <div className="space-x-4 text-sm sm:text-base">
          <Link href="/" className="hover:text-teal-400">Home</Link>
          <Link href="/experience" className="hover:text-teal-400">Experience</Link>
          <Link href="/skills" className="hover:text-teal-400">Skills</Link>
          <Link href="/certifications" className="hover:text-teal-400">Certifications</Link>
          <Link href="/projects" className="hover:text-teal-400">Projects</Link>
          <Link href="/education" className="hover:text-teal-400">Education</Link>
          <Link href="/contact" className="hover:text-teal-400">Contact</Link>
          <Link href="/blog" className="hover:text-teal-400">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
