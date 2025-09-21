import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="md:col-span-1"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-green-400 font-medium">AI-Powered Healthcare Platform</span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600"
      >
        Revolutionizing Rural Healthcare with AI
      </motion.h2>
      <motion.p variants={itemVariants} className="text-slate-300 mb-8 max-w-lg">
        Fast, smart, and reliable telemedicine with{' '}
        <span className="text-indigo-400">real-time video consultations</span>, AI symptom checking, and emergency medicine tracking for underserved areas.
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
        <button className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
          Explore Features <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
        </button>
        <button className="bg-slate-800 text-white font-semibold py-3 px-8 rounded-full border border-slate-700 hover:border-purple-500 transition-colors">
          Watch Demo
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
