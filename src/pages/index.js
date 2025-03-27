// src/pages/index.js
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen flex items-center justify-center bg-[#0A192F] text-white px-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <>
        <div className="absolute top-0 left-0 z-0 p-8">
          <Image
            src="/profile.jpg"
            alt="Rajnish Left"
            width={300}
            height={300}
            className="opacity-100 object-cover rounded-full"
            quality={100}
          />
        </div>
        <div className="absolute top-0 right-0 z-0 p-8">
          <Image
            src="/profile1.jpg"
            alt="Rajnish Right"
            width={300}
            height={300}
            className="opacity-100 object-cover rounded-full"
            quality={100}
          />
        </div>
      </>

      {/* Content Overlay */}
      <div className="relative z-10 w-full text-center">
        {/* Animated Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Rajnish Kumar Srivastava
        </motion.h1>

        <h2 className="text-2xl md:text-3xl mb-6 text-teal-300">
          Information Security Lead | SOC & Cybersecurity Expert
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          📍 Based in Hamburg, Germany
        </p>

        <div className="text-lg md:text-xl mb-8 text-gray-200 space-y-4 text-justify w-full px-16">
          <p>
            As a seasoned Cybersecurity Technical Lead with over 13 years of experience, I specialize in safeguarding complex infrastructures through advanced Security Operations (SOC), Vulnerability Management, and proactive threat monitoring. My expertise spans a wide range of cutting-edge security tools and technologies, including QRadar, Splunk, Google Chronicle, RSA Archer, and Rapid7, enabling me to design and implement comprehensive cybersecurity strategies that align with business objectives.
          </p>
          <p>
            I am passionate about building resilient cybersecurity systems, enhancing threat detection capabilities, and ensuring regulatory compliance (PCI DSS, HIPAA, ISO/IEC 27001). I’ve successfully led cybersecurity teams in high-stakes environments, overseeing everything from vulnerability assessments to incident management for major organizations across industries.
          </p>
          <p>
            In my current role at Tata Consultancy Services, I collaborate with cross-functional teams to remediate vulnerabilities, drive security improvement initiatives, and manage end-to-end SIEM configurations. With a strong focus on continuous learning and innovation, I remain committed to staying ahead of evolving cyber threats to protect organizations and their critical data.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
