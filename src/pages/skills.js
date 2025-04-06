// src/pages/skills.js
import { useState } from "react";
import { motion } from "framer-motion";

const skillSections = [
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
    title: "SIEM Solutions",
    items: [
      { name: "Splunk", image: "skills/splunk.png" },
      { name: "QRadar", image: "skills/qradar.png" },
      { name: "Google SecOps", image: "skills/google_secops.png" },
    ],
  },
  {
    title: "Tools & Solutions",
    items: [
      {
        category: "Security Information and Event Management",
        tools: [
          { name: "Splunk", image: "skills/splunk.png" },
          { name: "QRadar", image: "skills/qradar.png" },
          { name: "Google SecOps", image: "skills/google_secops.png" },
        ],
      },
      {
        category: "Endpoint Security",
        tools: [
          { name: "Microsoft Defender for Endpoint", image: "skills/mde.png" },
          { name: "McAfee ePO", image: "skills/mcafee_epo.png" },
          { name: "CrowdStrike", image: "skills/crowdstrike.png" },
        ],
      },
      {
        category: "Vulnerability Management",
        tools: [
          { name: "Rapid-7 Insight VM", image: "skills/insight_vm.png" },
          { name: "Microsoft Defender for Endpoint", image: "skills/mde.png" },
          { name: "Tanium", image: "skills/tanium.png" },
        ],
      },
      {
        category: "Network Security",
        tools: [
          { name: "Zscaler", image: "skills/zscaler.jpeg" },
          { name: "Netskope", image: "skills/netskope.png" },
        ],
      },
      {
        category: "Dark Web Monitoring",
        tools: [
          { name: "Kela Radark", image: "skills/kela.png" },
        ],
      },
      {
        category: "Brand Monitoring",
        tools: [
          { name: "ZeroFox", image: "skills/zerofox.png" },
        ],
      },
      {
        category: "GRC",
        tools: [
          { name: "RSA Archer", image: "skills/rsa_archer.jpeg" },
        ],
      },
      {
        category: "Security Awareness Training",
        tools: [
          { name: "KnowBe4", image: "skills/knowbe4.jpeg" },
        ],
      },
    ],
  },
  {
    title: "Compliance & Frameworks",
    items: ["GDPR", "ISO 27001", "NIST"],
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
    items: [
      "Analytical",
      "Problem Solving",
      "Communication",
      "Attention to Details",
      "Adaptibility",
      "Learning Mindset",
    ],
  },
];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [toolCategoryIndex, setToolCategoryIndex] = useState(0);

  const handleBack = () => {
    setToolCategoryIndex(0);
    setSelectedTab(null);
  };

  const handlePrev = () =>
    setSelectedTab((prev) => (prev > 0 ? prev - 1 : skillSections.length - 1));

  const handleNext = () =>
    setSelectedTab((prev) => (prev < skillSections.length - 1 ? prev + 1 : 0));

  const handleToolCategoryChange = (direction) => {
    setToolCategoryIndex((prev) => {
      const max = skillSections[2].items.length - 1;
      if (direction === "prev") return prev > 0 ? prev - 1 : max;
      if (direction === "next") return prev < max ? prev + 1 : 0;
      return prev;
    });
  };

  const renderItems = (items) => {
    const isSIEMSection = selectedTab === 1;
    const isToolsSection = selectedTab === 2;

    if (isSIEMSection) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <div className="w-60 h-60 rounded-full overflow-hidden bg-white flex items-center justify-center shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      );
    } else if (isToolsSection) {
      const group = items[toolCategoryIndex];
      return (
        <div className="relative">
          <h3 className="text-xl text-teal-400 font-bold mb-6 text-center">
            {group.category}
          </h3>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handleToolCategoryChange("prev")}
              className="text-6xl font-bold text-white bg-[#1e293b] p-4 rounded-full hover:bg-[#334155]"
            >
              &#60;
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {group.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-60 h-60 rounded-full overflow-hidden bg-white flex items-center justify-center shadow">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleToolCategoryChange("next")}
              className="text-6xl font-bold text-white bg-[#1e293b] p-4 rounded-full hover:bg-[#334155]"
            >
              &#62;
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
  };

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
          <div className="grid md:grid-cols-2 gap-6">
            {skillSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className="px-16 py-8 text-xl font-semibold bg-[#112240] hover:bg-[#1a2d45] transition-colors p-6 rounded-xl text-left shadow-md hover:shadow-teal-500/30"
              >
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>
              </button>
            ))}
          </div>
        ) : (
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
              {renderItems(skillSections[selectedTab].items)}
            </div>
          </>
        )}
      </div>
    </motion.main>
  );
}