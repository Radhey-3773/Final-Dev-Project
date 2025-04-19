import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createDeck, dealCards, rankHand } from '../utils/gameUtils';
import { makeBotDecision, getBotEmotion } from '../utils/botLogic';
import PlayerHand from './PlayerHand';
import Controls from './Controls';
import PotDisplay from './PotDisplay';
import Chip from './Chip';
import BotAvatar from './BotAvatar';

const GameBoard = () => {
  const [deck, setDeck] = useState([]);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [pot, setPot] = useState(0);
  const [currentBet, setCurrentBet] = useState(0);
  const [gameLog, setGameLog] = useState([]);
  const [gamePhase, setGamePhase] = useState('setup');
  const [minBet, setMinBet] = useState(10);
  const [showChips, setShowChips] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const newDeck = createDeck();
    const { deck: shuffledDeck, players: newPlayers } = dealCards(newDeck, 4);
    
    setDeck(shuffledDeck);
    setPlayers(newPlayers.map((player, index) => ({
      ...player,
      id: index,
      balance: 1000,
      isSeen: index === 0,
      isActive: true,
      isFolded: false,
      emotion: 'neutral'
    })));
    setCurrentPlayer(0);
    setPot(0);
    setCurrentBet(0);
    setGameLog([]);
    setGamePhase('playing');
    setShowChips(true);
  };

  const checkGameOver = () => {
    const activePlayers = players.filter(p => !p.isFolded);
    if (activePlayers.length === 1) {
      // Game over, one player remaining
      const winner = activePlayers[0];
      winner.balance += pot;
      addToGameLog(`${winner.name} wins ₹${pot}!`);
      setPot(0);
      setCurrentBet(0);
      setTimeout(initializeGame, 3000);
      return true;
    }
    return false;
  };

  const handlePlayerAction = (action, amount = minBet) => {
    if (gamePhase !== 'playing') return;

    const updatedPlayers = [...players];
    const player = updatedPlayers[currentPlayer];
    
    switch (action) {
      case 'see':
        player.isSeen = true;
        break;
      case 'fold':
        player.isFolded = true;
        if (checkGameOver()) return;
        break;
      case 'call':
        if (player.balance < amount) {
          addToGameLog(`${player.name} cannot afford to call`);
          return;
        }
        player.balance -= amount;
        setPot(prev => prev + amount);
        break;
      case 'raise':
        if (player.balance < amount) {
          addToGameLog(`${player.name} cannot afford to raise`);
          return;
        }
        player.balance -= amount;
        setPot(prev => prev + amount);
        setCurrentBet(amount);
        break;
    }

    setPlayers(updatedPlayers);
    addToGameLog(`${player.name} ${action}${amount ? ` ${amount}` : ''}`);

    // Move to next active player
    let nextPlayer = (currentPlayer + 1) % players.length;
    while (players[nextPlayer].isFolded && nextPlayer !== currentPlayer) {
      nextPlayer = (nextPlayer + 1) % players.length;
    }
    
    if (nextPlayer === currentPlayer) {
      // All players have folded except one
      checkGameOver();
      return;
    }

    setCurrentPlayer(nextPlayer);

    // If it's a bot's turn, make their decision
    if (nextPlayer !== 0) {
      setTimeout(() => {
        makeBotMove(nextPlayer);
      }, 1000);
    }
  };

  const makeBotMove = (botIndex) => {
    const bot = players[botIndex];
    const decision = makeBotDecision(bot, currentBet, minBet, bot.isSeen);
    const emotion = getBotEmotion(decision, rankHand(bot.cards).rank / 6);
    
    // Update bot's emotion
    const updatedPlayers = [...players];
    updatedPlayers[botIndex].emotion = emotion;
    setPlayers(updatedPlayers);

    handlePlayerAction(decision, currentBet);
  };

  const addToGameLog = (message) => {
    setGameLog(prev => [...prev, message]);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Casino table background */}
      <div className="absolute inset-0 bg-green-900 opacity-20" />
      
      {/* Game board */}
      <div className="relative p-8">
        {/* Bot players */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {players.slice(1).map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <BotAvatar
                name={player.name}
                emotion={player.emotion}
                isActive={player.id === currentPlayer}
              />
              <div className="mt-4">
                <PlayerHand
                  cards={player.cards}
                  isSeen={player.isSeen}
                  isActive={player.id === currentPlayer}
                  isFolded={player.isFolded}
                  onSee={() => handlePlayerAction('see')}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pot and chips */}
        <div className="flex justify-center mb-8">
          <AnimatePresence>
            {showChips && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center space-x-4"
              >
                <Chip amount={pot} isFloating />
                <span className="text-white text-2xl font-bold">=</span>
                <span className="text-white text-2xl font-bold">₹{pot}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Human player */}
        <div className="flex flex-col items-center">
          <PlayerHand
            cards={players[0]?.cards || []}
            isSeen={players[0]?.isSeen}
            isActive={currentPlayer === 0}
            isFolded={players[0]?.isFolded}
            onSee={() => handlePlayerAction('see')}
          />
          <Controls
            onFold={() => handlePlayerAction('fold')}
            onCall={() => handlePlayerAction('call')}
            onRaise={(amount) => handlePlayerAction('raise', amount)}
            minBet={minBet}
            currentBet={currentBet}
            balance={players[0]?.balance || 0}
            isActive={currentPlayer === 0}
          />
        </div>

        {/* Game log */}
        <PotDisplay
          pot={pot}
          currentBet={currentBet}
          gameLog={gameLog}
        />
      </div>
    </div>
  );
};

export default GameBoard; 