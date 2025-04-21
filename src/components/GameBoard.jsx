import React, { useState, useEffect } from 'react';
import PokerTable from './PokerTable';
import { sampleGameState } from '../utils/sampleGameState';
import { makeBotDecision } from '../utils/botLogic';

const GameBoard = () => {
  const [gameState, setGameState] = useState(sampleGameState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize game state
    const initialState = {
      ...sampleGameState,
      players: sampleGameState.players.map(player => ({
        ...player,
        isFolded: false,
        isSeen: false,
        bet: 0
      }))
    };
    setGameState(initialState);
    setIsInitialized(true);
  }, []);

  const handleBotAction = (bot) => {
    if (bot.isBot && gameState.currentPlayer === bot.id) {
      const decision = makeBotDecision(bot, gameState.currentBet, gameState.minRaise, bot.isSeen);
      let amount = 0;
      
      if (decision === 'call') {
        amount = gameState.currentBet - bot.bet;
      } else if (decision === 'raise') {
        amount = Math.min(
          gameState.currentBet * 2,
          bot.chips
        );
      }

      handleAction(decision, amount);
    }
  };

  const handleAction = (action, amount = 0) => {
    setGameState(prevState => {
      const newState = { ...prevState };
      const currentPlayerIndex = newState.players.findIndex(p => p.id === newState.currentPlayer);
      const currentPlayer = newState.players[currentPlayerIndex];

      switch (action) {
        case 'fold':
          currentPlayer.isFolded = true;
          break;
        case 'call':
          if (amount > 0 && currentPlayer.chips >= amount) {
            currentPlayer.chips -= amount;
            currentPlayer.bet += amount;
            newState.pot += amount;
            newState.currentBet = Math.max(newState.currentBet, currentPlayer.bet);
          }
          break;
        case 'raise':
          if (amount > 0 && currentPlayer.chips >= amount) {
            currentPlayer.chips -= amount;
            currentPlayer.bet += amount;
            newState.pot += amount;
            newState.currentBet = currentPlayer.bet;
          }
          break;
      }

      // Move to next active player
      let nextPlayerIndex = (currentPlayerIndex + 1) % newState.players.length;
      let activePlayers = newState.players.filter(p => !p.isFolded);
      
      if (activePlayers.length <= 1) {
        // Game over, determine winner
        const winner = activePlayers[0];
        if (winner) {
          winner.chips += newState.pot;
          newState.pot = 0;
        }
        // Reset for new hand
        newState.players.forEach(p => {
          p.isFolded = false;
          p.bet = 0;
          p.isSeen = false;
        });
        newState.currentBet = 0;
        newState.dealerPosition = (newState.dealerPosition + 1) % newState.players.length;
      } else {
        // Find next active player
        while (newState.players[nextPlayerIndex].isFolded) {
          nextPlayerIndex = (nextPlayerIndex + 1) % newState.players.length;
        }
        newState.currentPlayer = newState.players[nextPlayerIndex].id;
        
        // If next player is a bot, trigger their action
        if (newState.players[nextPlayerIndex].isBot) {
          setTimeout(() => handleBotAction(newState.players[nextPlayerIndex]), 1000);
        }
      }

      return newState;
    });
  };

  if (!isInitialized) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-900">
      <PokerTable
        players={gameState.players}
        communityCards={gameState.communityCards}
        dealerPosition={gameState.dealerPosition}
        currentPlayer={gameState.currentPlayer}
        pot={gameState.pot}
        onAction={handleAction}
        gameState={gameState}
      />
    </div>
  );
};

export default GameBoard; 