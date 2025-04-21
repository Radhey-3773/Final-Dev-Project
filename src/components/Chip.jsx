import React from 'react';
import { motion } from 'framer-motion';
import goldRushImage from '../assets/gold-rush-40mm.png';

const Chip = ({ value, isStacked = false }) => {
  return (
    <motion.div
      className={`flex items-center gap-2 ${isStacked ? 'absolute' : 'relative'}`}
      whileHover={!isStacked ? { scale: 1.1 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-12 h-12">
        <img 
          src={goldRushImage} 
          alt="Gold Rush Chip" 
          className="w-full h-full object-cover rounded-full"
        />
        {/* Highlight */}
        <div className="absolute inset-1 rounded-full bg-white opacity-20 h-1/3" />
      </div>
      <span className="text-white font-bold text-sm">
        ${value}
      </span>
    </motion.div>
  );
};

export default Chip; 