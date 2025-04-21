import { motion } from 'framer-motion';

const PotDisplay = ({ pot, currentBet, gameLog }) => {
  return (
    <motion.div 
      className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-8">
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gray-400 text-sm">Pot</span>
          <motion.div 
            className="text-4xl font-bold text-yellow-400"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            ₹{pot}
          </motion.div>
        </motion.div>

        <div className="h-12 w-px bg-gray-700" />

        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gray-400 text-sm">Current Bet</span>
          <motion.div 
            className="text-3xl font-bold text-blue-400"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            ₹{currentBet}
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full max-h-48 overflow-y-auto bg-gray-800/50 rounded-xl p-4">
        <h3 className="text-lg font-bold text-white mb-3">Game Log</h3>
        <ul className="space-y-2">
          {gameLog.map((log, index) => (
            <motion.li 
              key={index}
              className="text-sm text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {log}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PotDisplay; 