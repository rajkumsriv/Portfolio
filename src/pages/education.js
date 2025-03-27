// src/pages/education.js
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Education
        </h1>

        <div className="bg-[#112240] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            Bachelor of Science (B.Sc.)
          </h2>
          <p className="text-gray-300">Physics, Mathematics & Statistics</p>
          <p className="text-gray-400 mt-1">University of Calcutta</p>
        </div>
      </div>
    </motion.main>
  );
}
