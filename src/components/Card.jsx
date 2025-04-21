import React from 'react';
import { motion } from 'framer-motion';
import posterImage from '../assets/poster.jpg';

const Card = ({ card, isFaceUp = false, onClick }) => {
  const getCardColor = (suit) => {
    return suit === '♥' || suit === '♦' ? 'text-red-600' : 'text-black';
  };

  return (
    <motion.div
      className="relative w-28 h-40 cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -15, scale: 1.05 }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isFaceUp ? 0 : 180 }}
      transition={{ 
        duration: 0.6,
        ease: "easeInOut"
      }}
      style={{ perspective: 1000 }}
    >
      <div className="absolute w-full h-full">
        {isFaceUp ? (
          <motion.div 
            className="w-full h-full bg-white rounded-xl p-3 flex flex-col justify-between border-2 border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between">
              <div className={`text-2xl font-bold ${getCardColor(card.suit)}`}>
                {card.value}
              </div>
              <div className={`text-2xl ${getCardColor(card.suit)}`}>
                {card.suit}
              </div>
            </div>
            <div className={`text-6xl flex justify-center ${getCardColor(card.suit)}`}>
              {card.suit}
            </div>
            <div className="flex justify-between">
              <div className={`text-2xl ${getCardColor(card.suit)}`}>
                {card.suit}
              </div>
              <div className={`text-2xl font-bold ${getCardColor(card.suit)}`}>
                {card.value}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="w-full h-full rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              transform: 'rotateY(180deg)',
              backgroundImage: `url(${posterImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-blue-600 bg-opacity-0" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Card; 