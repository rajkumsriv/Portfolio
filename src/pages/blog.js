// pages/blog.js
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-24 flex flex-col items-center justify-center text-center space-y-8"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <h1 className="text-6xl font-bold text-teal-400">Blog</h1>
      
      <div className="text-[10rem] leading-none">🚧</div>

      <p className="text-4xl text-yellow-400 max-w-5xl">
        Stay tuned — amazing cybersecurity insights are on the way!
      </p>
    </motion.main>
  );
}
