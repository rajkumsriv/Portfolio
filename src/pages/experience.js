// src/pages/experience.js
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Professional Experience
        </h1>

        {/* TCS */}
        <div className="mb-12 bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
          <h2 className="text-2xl font-semibold text-blue-400">
            Tata Consultancy Services (TCS)
          </h2>
          <p className="text-sm text-gray-400 mb-2">
            Information Security Lead | May 2019 – Present
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Leading a 20-member cybersecurity team managing SOC, Vulnerability Management, Endpoint Security, and PKI.</li>
            <li>Implemented and managed SIEM tools (QRadar, Splunk, Chronicle) for real-time monitoring and incident response.</li>
            <li>Strengthened endpoint security using CrowdStrike, Microsoft Defender, and McAfee ePO.</li>
            <li>Handled email security and phishing training via Proofpoint and KnowBe4.</li>
            <li>Led risk management initiatives and ensured compliance with GDPR and internal audit requirements.</li>
            <li>Acted as a primary cybersecurity contact for key clients, delivering reports and dashboards for leadership.</li>
          </ul>
        </div>

        {/* Wipro */}
        <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
          <h2 className="text-2xl font-semibold text-blue-400">
            Wipro Technologies
          </h2>
          <p className="text-sm text-gray-400 mb-2">
            Senior Security Analyst | Sep 2011 – Apr 2019
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Monitored SIEM environments using QRadar and Splunk to detect and respond to cyber threats.</li>
            <li>Conducted forensic investigations, phishing analysis, and implemented countermeasures.</li>
            <li>Collaborated with teams to remediate vulnerabilities and improve compliance posture.</li>
            <li>Authored SOPs and Playbooks to standardize security operations.</li>
            <li>Maintained risk registers and ensured ISO 27001 & NIST adherence.</li>
          </ul>
        </div>
      </div>
    </motion.main>
  );
}
