// src/pages/skills.js
import { useState } from "react";
import { motion } from "framer-motion";

const skillSections = [
  {
    title: "SIEM Solutions",
    items: ["Splunk", "QRadar", "Google Chronicle"],
  },
  
  {
    title: "Cybersecurity Skills",
    items: [
      "Security Incident Management",
	  "Security Information & Event Management",
	  "Endpoint security",
      "Email Security",
      "Network Security",
      "Vulnerability Management",
	  "Data Loss Prevention",
      "Risk Assessment and Mitigation",
      "Security Awareness Training",
      
    ],
  },
  {
    title: "Compliance & Frameworks",
    items: ["GDPR", "ISO 27001", "NIST"],
  },
  {
    title: "Tools & Solutions",
    items: [
      "QRadar",
	  "Splunk",
	  "Google Chronicle",
	  "Microsoft Defender for Endpoint",
	  "CrowdStrike",
	  "McAfee ePO",
      "RSA Archer",
      "KnowBe4",
      "Netskope",
      "Zscaler",
      "ZeroFox",
      "Kela Radark",
      "Rapid7 - Insight VM",
      "Tanium",
    ],
  },
  {
    title: "Management Skills",
    items: [
      "Process Improvement",
      "Project Management",
      "People Management",
	  "Vendor & Third-Party Risk Management",
      "IT Service Management",
	  "Cross-Functional Collaboration",
	  "Stakeholder Communication",
    ],
  },
  {
    title: "Foundational Skills",
    items: ["Analytical", "Problem Solving", "Communication", "Attention to Details", "Adaptibility", "Learning Mindset"],
  },
];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleBack = () => setSelectedTab(null);
  const handlePrev = () =>
    setSelectedTab((prev) =>
      prev > 0 ? prev - 1 : skillSections.length - 1
    );
  const handleNext = () =>
    setSelectedTab((prev) =>
      prev < skillSections.length - 1 ? prev + 1 : 0
    );

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-8 text-center">
          🛡️ Key Cybersecurity Skills
        </h1>

        {selectedTab === null ? (
          // First Level Navigation: Tabs
          <div className="grid md:grid-cols-2 gap-6">
            {skillSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className="bg-[#112240] hover:bg-[#1a2d45] transition-colors p-6 rounded-xl text-left shadow-md hover:shadow-teal-500/30"
              >
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>
              </button>
            ))}
          </div>
        ) : (
          // Second Level Navigation: Content View
          <>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleBack}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded"
              >
                ← Back
              </button>
              <div className="space-x-2">
                <button
                  onClick={handlePrev}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="bg-[#112240] p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                {skillSections[selectedTab].title}
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
                {skillSections[selectedTab].items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </motion.main>
  );
}
