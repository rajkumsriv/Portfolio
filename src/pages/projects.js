// src/pages/projects.js
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Key Projects & Achievements
        </h1>

        <div className="grid gap-8">
          {/* Chronicle SIEM */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              Chronicle SIEM Deployment
            </h2>
            <p className="text-gray-300">
              Successfully completed a full rollout of Google Chronicle SIEM across enterprise infrastructure. Delivered custom dashboards, threat detection pipelines, and streamlined log ingestion.
            </p>
          </div>

          {/* Netskope Custom Shipper */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              Custom Log Shipper for Netskope
            </h2>
            <p className="text-gray-300">
              Designed and implemented a custom log shipper to ingest proxy logs from Netskope into SIEM platforms, improving visibility and detection.
            </p>
          </div>

          {/* SOAR/EDR POCs */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              POCs for SOAR and EDR Tools
            </h2>
            <p className="text-gray-300">
              Led evaluations of security tools such as Palo Alto XSOAR (Demisto), OSQuery, and Sysmon for endpoint detection and automation integration.
            </p>
          </div>

          {/* BitLocker Migration */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              Data Protection: BitLocker Migration
            </h2>
            <p className="text-gray-300">
              Successfully migrated endpoint encryption from McAfee Drive Encryption to Microsoft BitLocker, enhancing compliance and performance.
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
