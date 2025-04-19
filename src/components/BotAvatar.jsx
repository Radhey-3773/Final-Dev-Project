import { motion } from 'framer-motion';

const BotAvatar = ({ name, emotion = 'neutral', isActive = false }) => {
  const getEmotionIcon = () => {
    switch (emotion) {
      case 'happy':
        return '😊';
      case 'sad':
        return '😢';
      case 'thinking':
        return '🤔';
      case 'winning':
        return '🎉';
      default:
        return '😐';
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg text-4xl">
          {getEmotionIcon()}
        </div>
        {isActive && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}
      </div>
      <span className="mt-2 text-white font-semibold">{name}</span>
    </motion.div>
  );
};

export default BotAvatar; 