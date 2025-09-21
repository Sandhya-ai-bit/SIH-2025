import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon } from 'lucide-react';

const AIConsultationCard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 97.3 ? 97.3 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="relative md:col-span-1 bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-700"
    >
      <div className="absolute top-4 right-4 flex items-center gap-2 text-yellow-400">
        <span className="h-2 w-2 rounded-full bg-red-500"></span>
        <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        <span className="text-sm font-semibold text-white">AI Active</span>
      </div>

      <h3 className="text-xl font-bold mb-6">AI Consultation</h3>

      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <UserCircleIcon className="text-purple-400 w-6 h-6" />
          <p className="text-slate-200 font-semibold">Patient Connected</p>
        </div>
        <p className="text-sm text-slate-400">
          Rural Clinic #47 • ID: #IMC-2847
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-500/20 rounded-xl p-4 text-center border border-green-500/30"
        >
          <p className="text-3xl font-extrabold text-green-400">72</p>
          <p className="text-sm text-green-300">BPM</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500/20 rounded-xl p-4 text-center border border-blue-500/30"
        >
          <p className="text-3xl font-extrabold text-blue-400">98.6°</p>
          <p className="text-sm text-blue-300">TEMP</p>
        </motion.div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-2">AI Analysis</h4>
        <div className="relative pt-1">
          <div className="overflow-hidden h-3 mb-2 text-xs flex rounded-full bg-purple-500/20">
            <motion.div
              style={{ width: `${progress}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 rounded-full"
            ></motion.div>
          </div>
          <span className="text-sm font-medium text-purple-400 float-right">
            {progress.toFixed(1)}%
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Diagnosis complete • Processing time: 1.8s
        </p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl border border-indigo-500/30"
      >
        <h5 className="text-lg font-bold text-white mb-2">
          Emergency Protocol Active
        </h5>
        <p className="text-sm text-purple-200">
          Specialist notified • ETA: 3 minutes
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AIConsultationCard;
