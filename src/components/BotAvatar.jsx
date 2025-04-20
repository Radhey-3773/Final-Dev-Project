import React from 'react';
import { motion } from 'framer-motion';

// Bot avatars mapping
const BOT_AVATARS = {
  bot1: {
    style: {
      backgroundColor: '#2563eb', // blue-600
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="20" fill="%23fff"/><circle cx="50" cy="85" r="35" fill="%23fff"/><circle cx="43" cy="32" r="4" fill="%23000"/><circle cx="57" cy="32" r="4" fill="%23000"/><path d="M40 45 Q50 55 60 45" stroke="%23000" fill="none" stroke-width="2"/></svg>')`,
      backgroundSize: 'cover'
    },
    emoji: '😎'
  },
  bot2: {
    style: {
      backgroundColor: '#dc2626', // red-600
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="20" fill="%23fff"/><circle cx="50" cy="85" r="35" fill="%23fff"/><circle cx="43" cy="32" r="4" fill="%23000"/><circle cx="57" cy="32" r="4" fill="%23000"/><path d="M40 45 Q50 35 60 45" stroke="%23000" fill="none" stroke-width="2"/></svg>')`,
      backgroundSize: 'cover'
    },
    emoji: '😈'
  },
  bot3: {
    style: {
      backgroundColor: '#16a34a', // green-600
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="20" fill="%23fff"/><circle cx="50" cy="85" r="35" fill="%23fff"/><circle cx="43" cy="32" r="4" fill="%23000"/><circle cx="57" cy="32" r="4" fill="%23000"/><path d="M40 45 H60" stroke="%23000" fill="none" stroke-width="2"/></svg>')`,
      backgroundSize: 'cover'
    },
    emoji: '🤖'
  }
};

const BotAvatar = ({ player, size = 64 }) => {
  // Handle both string IDs ("bot1") and number IDs (1)
  const getBotStyle = (player) => {
    if (typeof player.id === 'string' && player.id.startsWith('bot')) {
      return BOT_AVATARS[player.id] || BOT_AVATARS.bot3;
    }
    // If it's a number, convert to bot1, bot2, etc.
    const botNumber = typeof player.id === 'number' ? player.id : parseInt(player.id);
    return BOT_AVATARS[`bot${botNumber}`] || BOT_AVATARS.bot3;
  };

  const botStyle = getBotStyle(player);
  
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
        style={{ backgroundColor: botStyle.style.backgroundColor }}
      />
      
      {/* Avatar Container */}
      <div 
        className="relative rounded-full overflow-hidden border-2 flex items-center justify-center"
        style={{ 
          width: size, 
          height: size,
          borderColor: botStyle.style.backgroundColor,
          ...botStyle.style
        }}
      >
        <span className="text-2xl">{botStyle.emoji}</span>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Player Name Badge */}
      <div 
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded-full text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        style={{ backgroundColor: botStyle.style.backgroundColor }}
      >
        {player.name}
      </div>

      {/* Thinking Indicator */}
      {player.isThinking && (
        <motion.div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-1">
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: botStyle.style.backgroundColor }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BotAvatar; 