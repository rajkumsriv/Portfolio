import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white px-4 md:px-16 py-20">
      <motion.section
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">About Me</h2>
        <p className="text-lg text-slate-200">
          I am Rajnish Kumar Srivastava, an Information Security Lead with over 11 years of experience.
          I specialize in managing 24/7 Security Operations Centers (SOC), incident response, and cybersecurity strategy.
        </p>
      </motion.section>
    </main>
  );
}
