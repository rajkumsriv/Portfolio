// src/pages/skills.js
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-12 text-center">
          🛡️ Key Cybersecurity Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "SIEM Solutions",
              items: ["Splunk", "QRadar", "Google Chronicle"],
            },
            {
              title: "EDR / Antivirus",
              items: ["CrowdStrike", "Microsoft Defender", "McAfee ePO"],
            },
            {
              title: "Security Domains",
              items: [
                "Email Security",
                "Network Security",
                "Cloud Security",
                "Risk & Vulnerability Management",
              ],
            },
            {
              title: "Compliance & Frameworks",
              items: ["GDPR", "ISO 27001", "NIST"],
            },
            {
              title: "Security Tools",
              items: ["Proofpoint", "KnowBe4", "Netskope", "OSQuery"],
            },
            {
              title: "Other Skills",
              items: [
                "Process Improvement",
                "Project Management",
                "Security Awareness Training",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-xl shadow-md hover:shadow-teal-500/30 transition-shadow"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-3">
                {section.title}
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
