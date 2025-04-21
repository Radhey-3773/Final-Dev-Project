import { motion } from 'framer-motion';
import Card from './Card';

const PlayerHand = ({ 
  cards, 
  isActive, 
  isSeen, 
  isFolded,
  onSee
}) => {
  return (
    <motion.div 
      className={`flex flex-col items-center p-6 rounded-2xl ${
        isActive 
          ? 'bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg shadow-blue-500/20' 
          : 'bg-gray-800/50'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-2">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              card={card}
              isFaceUp={isSeen}
              onClick={isActive && !isSeen ? onSee : undefined}
            />
          </motion.div>
        ))}
      </div>

      {isActive && !isSeen && (
        <motion.button
          onClick={onSee}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See Cards
        </motion.button>
      )}
    </motion.div>
  );
};

export default PlayerHand; 