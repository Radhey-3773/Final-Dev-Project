import { motion } from 'framer-motion';

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
            className="w-full h-full bg-white rounded-xl shadow-2xl p-3 flex flex-col justify-between border-2 border-gray-200"
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
            className="w-full h-full rounded-xl shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl border-4 border-white">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20 rounded-xl" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Card; 