import { useState } from 'react';
import { motion } from 'framer-motion';

const Controls = ({ 
  isActive,
  currentBet,
  minBet,
  balance,
  onFold,
  onCall,
  onRaise
}) => {
  const [showRaiseModal, setShowRaiseModal] = useState(false);
  const [raiseAmount, setRaiseAmount] = useState(minBet * 2);

  if (!isActive) return null;

  const handleRaise = () => {
    onRaise(raiseAmount);
    setShowRaiseModal(false);
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div 
        className="flex gap-4 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onFold}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Fold
        </motion.button>
        
        <motion.button
          onClick={onCall}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Call (₹{currentBet})
        </motion.button>
        
        <motion.button
          onClick={() => setShowRaiseModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Raise
        </motion.button>
      </motion.div>

      {showRaiseModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h3 className="text-white text-lg font-bold mb-4">Raise Amount</h3>
            <input
              type="number"
              min={currentBet + minBet}
              max={balance}
              value={raiseAmount}
              onChange={(e) => setRaiseAmount(Number(e.target.value))}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4"
            />
            <div className="flex gap-4">
              <motion.button
                onClick={handleRaise}
                className="px-4 py-2 bg-green-500 text-white rounded"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Confirm
              </motion.button>
              <motion.button
                onClick={() => setShowRaiseModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Controls; 