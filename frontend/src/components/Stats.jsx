import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '99.2%', label: 'AI Accuracy' },
    { value: '24/7', label: 'Availability' },
    { value: '2.1s', label: 'Response Time' },
  ];

  return (
    <div className="mt-16 md:mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500 mb-1">
              {stat.value}
            </h4>
            <p className="text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
