// src/pages/Qualifications.js
import { useState } from "react";
import { motion } from "framer-motion";

const certificationsData = {
  tabs: ["Academic", "Trainings", "Certifications"],
  content: {
    Academic: {
      degree: "Bachelor of Science (B.Sc.) - 2010",
      subjects: "Physics, Mathematics & Statistics",
      university: "University of Calcutta"
    },
    Trainings: [
      { id: "Certified Information Systems Security Professional", name: "Certified Information Systems Security Professional-InfosecTrain", image: "/certificates/cissp.jpg" },
	  { id: "Certified Information Systems Security Professional", name: "Certified Information Systems Security Professional-Udemy", image: "/certificates/cissp_udemy.jpg" },
      { id: "ECSA", name: "EC-Council Certified Security Analyst", image: "/certificates/ecsa.jpg" },
	  { id: "WADT", name: "WIndows Active Directory Training", image: "/certificates/wadt.jpg" },
      { id: "CCSP", name: "Certified Cloud Security Professional", image: "/certificates/ccsp.jpg" }
    ],
    Certifications: [
      { id: "Microsoft Certified : Security Operations Analyst (SC-200)", name: "Microsoft Certified : Security Operations Analyst (SC-200)", image: "/certificates/sc-200.jpg" },
      { id: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)", name: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)", image: "/certificates/sc-900.jpg" },
      { id: "EC-Council : Certified Ethical Hacker (CEH)", name: "EC-Council : Certified Ethical Hacker (CEH)", image: "/certificates/ceh.jpg" },
      { id: "Splunk", name: "Splunk", subtitle: "Splunk Certified Power User (2017)", image: "/certificates/splunk.jpg" },
      { id: "QRadar", name: "QRadar", subtitle: "IBM QRadar Certified Analyst (2018)", image: "/certificates/qradar.jpg" }
    ]
  }
};

export default function Certifications() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleBack = () => {
    if (zoomedImage) {
      setZoomedImage(null);
    } else {
      setSelectedTab(null);
    }
  };

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-6 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-8 text-center">
          Qualifications
        </h1>

        {!selectedTab ? (
          <div className="flex flex-wrap justify-center gap-6">
            {certificationsData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className="px-16 py-8 bg-[#112240] text-white rounded-xl shadow hover:bg-teal-500 transition text-3xl font-bold"
              >
                {tab}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
              >
                ← Back
              </button>
              <h2 className="text-2xl font-bold text-teal-400 text-center w-full">
                {selectedTab}
              </h2>
            </div>

            {selectedTab === "Academic" ? (
              <div className="flex justify-center">
                <div className="bg-[#112240] p-8 rounded-xl text-gray-300 shadow-md w-full max-w-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {certificationsData.content.Academic.degree}
                  </h3>
                  <p className="text-lg mb-1">{certificationsData.content.Academic.subjects}</p>
                  <p className="text-lg font-semibold text-teal-400">
                    {certificationsData.content.Academic.university}
                  </p>
                </div>
              </div>
            ) : zoomedImage ? (
              <div className="flex justify-center items-center">
                <img
                  src={zoomedImage.image}
                  alt={zoomedImage.name}
                  className="w-full max-h-[90vh] object-contain rounded-lg shadow-md"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.content[selectedTab].map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-[#112240] p-4 rounded-lg shadow text-left text-gray-300 hover:bg-teal-600/30 cursor-pointer"
                    onClick={() => setZoomedImage(cert)}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    {cert.subtitle && (
                      <p className="text-sm text-gray-400 mb-2">{cert.subtitle}</p>
                    )}
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full max-h-[400px] object-contain rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.main>
  );
}
