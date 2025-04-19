import { motion } from 'framer-motion';

const Chip = ({ amount, isFloating = false }) => {
  return (
    <motion.div
      className={`relative flex items-center gap-2 ${
        isFloating ? 'animate-float' : ''
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg" />
        <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-yellow-800">₹</span>
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-yellow-700/30" />
      </div>
      <span className="text-yellow-400 font-bold">{amount}</span>
    </motion.div>
  );
};

export default Chip; 