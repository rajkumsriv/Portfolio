// src/pages/certifications.js
import { useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    id: "SC-200",
    name: "SC-200",
    subtitle: "Microsoft Certified Security Analyst Associate (2022)",
    image: "/certificates/sc-200.jpg",
  },
  {
    id: "SC-900",
    name: "SC-900",
    subtitle: "Microsoft Azure Fundamentals (2022)",
    image: "/certificates/sc-900.jpg",
  },
  {
    id: "CEH",
    name: "CEH",
    subtitle: "EC-Council Certified Ethical Hacker (2017)",
    image: "/certificates/ceh.jpg",
  },
  {
    id: "ECSA",
    name: "ECSA",
    subtitle: "EC-Council Certified Security Analyst (2018)",
    image: "/certificates/ecsa.jpg",
  },
  {
    id: "Splunk",
    name: "Splunk",
    subtitle: "Splunk Certified Power User (2017)",
    image: "/certificates/splunk.jpg",
  },
  {
    id: "QRadar",
    name: "QRadar",
    subtitle: "IBM QRadar Certified Analyst (2018)",
    image: "/certificates/qradar.jpg",
  },
  {
    id: "CISSP",
    name: "CISSP (In Progress)",
    subtitle: "Expected Apr 2025",
    image: "/certificates/cissp.jpg",
  },
];

export default function Certifications() {
  const [active, setActive] = useState(certifications[0]);

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-6 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-12 text-center">
          Certifications
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/4 space-y-2">
            {certifications.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setActive(cert)}
                className={`w-full text-left px-4 py-3 rounded-lg transition font-semibold ${
                  active.id === cert.id
                    ? "bg-teal-500 text-white"
                    : "bg-[#112240] text-gray-300 hover:bg-teal-600/30"
                }`}
              >
                {cert.name}
              </button>
            ))}
          </div>

          {/* Certificate Display */}
          <div className="md:w-3/4 bg-[#112240] rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">
              {active.name}
            </h2>
            <p className="text-lg text-gray-400 mb-6">{active.subtitle}</p>
            <img
              src={active.image}
              alt={active.name}
              className="w-full max-h-[600px] object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
