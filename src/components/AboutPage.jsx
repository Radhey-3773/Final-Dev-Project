import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-8">
      <motion.div 
        className="bg-gray-800 p-8 rounded-lg max-w-2xl text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">About Teen Patti</h1>
        <p className="mb-4">
          Teen Patti is a popular card game in South Asia, similar to Three Card Brag. 
          It's a game of skill, strategy, and luck where players bet on the strength of their three-card hand.
        </p>
        <p className="mb-6">
          This digital version brings the excitement of Teen Patti to your screen, allowing you to play against AI opponents 
          and experience the thrill of the game from anywhere.
        </p>
        
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/game-selection')}
        >
          Back to Game Selection
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutPage; 