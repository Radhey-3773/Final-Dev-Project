import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Chip from './Chip';
import BotAvatar from './BotAvatar';
import { playSound, stopAllSounds } from '../utils/sounds';
import { sampleGameState } from '../utils/sampleGameState';
import goldRushImage from '../assets/gold-rush-40mm.png';
import animeBotImage from '../assets/anime-bot.png';
import bot2Image from '../assets/bot2.jpeg';
import bot3Image from '../assets/bot21.jpeg';
import Sidebar from './Sidebar';

const PlayerAvatar = ({ player }) => {
  if (player.isBot) {
    if (player.id === 'bot1') {
      return (
        <motion.div 
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-[#9370DB] shadow-lg shadow-[#9370DB]/20"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={animeBotImage} 
            alt="Bot Avatar" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      );
    }
    if (player.id === 'bot2') {
      return (
        <motion.div 
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-[#9370DB] shadow-lg shadow-[#9370DB]/20"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={bot2Image} 
            alt="Bot 2 Avatar" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      );
    }
    if (player.id === 'bot3') {
      return (
        <motion.div 
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-[#9370DB] shadow-lg shadow-[#9370DB]/20"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={bot3Image} 
            alt="Bot 3 Avatar" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      );
    }
    return <BotAvatar player={player} />;
  }

  return (
    <motion.div 
      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#1E1E2E] to-[#2D2D44] flex items-center justify-center text-2xl border-2 border-[#9370DB] shadow-lg shadow-[#9370DB]/20"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      {player.avatar}
    </motion.div>
  );
};

const PokerTable = ({ 
  players = sampleGameState.players,
  communityCards = sampleGameState.communityCards,
  dealerPosition = sampleGameState.dealerPosition,
  currentPlayer = sampleGameState.currentPlayer,
  pot = sampleGameState.pot,
  onAction,
  gameState = sampleGameState
}) => {
  const [raiseAmount, setRaiseAmount] = useState(0);
  const [cardsSeen, setCardsSeen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    playSound('chipStack', 0.3);
    return () => stopAllSounds();
  }, []);

  const handleSeeCards = () => {
    if (!cardsSeen && currentPlayer === 'human') {
      setCardsSeen(true);
      playSound('cardFlip');
      // Update player's seen status in game state
      const updatedPlayers = players.map(player => 
        player.id === 'human' ? { ...player, isSeen: true } : player
      );
      onAction('see', 0, updatedPlayers);
    }
  };

  const handleAction = (action, amount = 0) => {
    if (onAction) {
      onAction(action, amount);
      playSound(action);
      if (action === 'fold') {
        setCardsSeen(false);
      }
    }
  };

  const getPlayerPositions = () => {
    const positions = {};
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth < 640;
    
    // Human player (bottom center)
    positions['human'] = {
      position: 'absolute',
      left: '50%',
      bottom: isMobile ? '10px' : '20px',
      transform: 'translateX(-50%)'
    };

    // Bot positions
    positions['bot1'] = {
      position: 'absolute',
      left: '50%',
      top: isMobile ? '10px' : '20px',
      transform: 'translateX(-50%)'
    };

    positions['bot2'] = {
      position: 'absolute',
      left: isMobile ? '10px' : '20px',
      top: '50%',
      transform: 'translateY(-50%)'
    };

    positions['bot3'] = {
      position: 'absolute',
      right: isMobile ? '10px' : '20px',
      top: '50%',
      transform: 'translateY(-50%)'
    };

    return positions;
  };

  const playerPositions = getPlayerPositions();

  const renderChipStack = (amount) => {
    if (amount <= 0) return null;
    
    const denominations = [1000, 500, 100, 25, 10, 5, 1];
    const chips = [];
    let remainingAmount = amount;

    denominations.forEach(value => {
      const count = Math.floor(remainingAmount / value);
      if (count > 0) {
        chips.push({ value, count });
        remainingAmount %= value;
      }
    });

    return (
      <div className="flex gap-1">
        {chips.map(({ value, count }, index) => (
          <div key={value} className="relative" style={{ zIndex: 10 - index }}>
            {[...Array(Math.min(count, 3))].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${-i * 2}px`,
                  left: `${i * 1}px`,
                }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Chip value={value} isStacked={i > 0} />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen bg-[#0A0A0F] overflow-hidden">
      {/* Dark Metallic Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1E1E2E] via-[#13131D] to-[#0A0A0F] opacity-90" />
      
      {/* Animated Smoke Effect */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E2E44] to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Table Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-[5%] rounded-[40%] bg-gradient-to-br from-[#1E1E2E] to-[#2D2D44] shadow-2xl">
          <div className="absolute inset-[2px] rounded-[40%] bg-gradient-to-br from-[#2D2D44] to-[#1E1E2E]">
            {/* Table Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiM5MzcwREIyMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10" />
            
            {/* Table Border Glow */}
            <div className="absolute -inset-[1px] rounded-[40%] bg-gradient-to-r from-[#9370DB] via-[#8A2BE2] to-[#9370DB] opacity-20 blur-md" />
          </div>
        </div>
      </div>

      <Sidebar />
      
      {/* Community Cards and Pot Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        {/* Pot Display */}
        <motion.div 
          className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm border border-[#9370DB]/20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <img 
            src={goldRushImage} 
            alt="Gold Rush Chip" 
            className="w-8 h-8 sm:w-12 sm:h-12"
          />
          <div className="text-[#9370DB] font-bold text-lg sm:text-xl">
            ${pot}
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <AnimatePresence>
        {currentPlayer && showControls && (
          <motion.div 
            className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 px-4 sm:px-6 rounded-xl text-sm shadow-lg shadow-red-600/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(220,38,38,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAction('fold')}
            >
              Fold
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-[#9370DB] to-[#8A2BE2] text-white font-bold py-2 px-4 sm:px-6 rounded-xl text-sm shadow-lg shadow-[#9370DB]/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147,112,219,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAction('call')}
            >
              Call
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] text-white font-bold py-2 px-4 sm:px-6 rounded-xl text-sm shadow-lg shadow-[#8A2BE2]/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(138,43,226,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAction('raise', raiseAmount)}
            >
              Raise
            </motion.button>
            
            <div className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-xl backdrop-blur-sm border border-[#9370DB]/20">
              <input
                type="range"
                min={gameState.minRaise}
                max={currentPlayer?.chips}
                value={raiseAmount}
                onChange={(e) => setRaiseAmount(parseInt(e.target.value))}
                className="w-24 accent-[#9370DB]"
              />
              <span className="text-[#9370DB] text-sm font-medium">${raiseAmount}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Players */}
      <div className="absolute inset-0">
        {players.map((player) => (
          <motion.div
            key={player.id}
            className={`absolute ${player.isBot ? 'w-24 sm:w-32' : 'w-32 sm:w-40'}`}
            style={playerPositions[player.id]}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div 
              className={`bg-black/30 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-[#9370DB]/20 ${
                player.id === currentPlayer ? 'ring-2 ring-[#9370DB] shadow-lg shadow-[#9370DB]/20' : ''
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <PlayerAvatar player={player} />
                <div className="text-center">
                  <div className="font-medium text-white/90 text-xs sm:text-sm mb-1">{player.name}</div>
                  <motion.div 
                    className="text-[#9370DB] font-bold text-xs sm:text-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    ${player.chips}
                  </motion.div>
                </div>

                {/* Player's Cards */}
                <div className="flex justify-center gap-1 mt-1 sm:mt-2">
                  {player.cards.map((card, cardIndex) => (
                    <motion.div
                      key={cardIndex}
                      className="transform scale-40 sm:scale-50 origin-center shadow-xl cursor-pointer"
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: player.id === currentPlayer ? (cardsSeen ? 0 : 180) : 180 }}
                      transition={{ duration: 0.6 }}
                      onClick={player.id === 'human' ? handleSeeCards : undefined}
                    >
                      <Card
                        card={card}
                        isFaceUp={player.id === 'human' ? cardsSeen : player.isSeen}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Player's Bet */}
                {player.bet > 0 && (
                  <motion.div 
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    {renderChipStack(player.bet)}
                  </motion.div>
                )}

                {/* Dealer Button */}
                {players.findIndex(p => p.id === player.id) === dealerPosition && (
                  <motion.div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9370DB] to-[#8A2BE2] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg shadow-[#9370DB]/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    D
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="absolute inset-0 border-t-2 border-l-2 border-[#9370DB] rounded-tl-3xl opacity-20"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          className="absolute inset-0 border-b-2 border-r-2 border-[#9370DB] rounded-br-3xl opacity-20"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default PokerTable; 