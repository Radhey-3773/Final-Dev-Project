import React, { useState, useEffect } from 'react';
import PokerTable from './PokerTable';
import { sampleGameState } from '../utils/sampleGameState';

const GameBoard = () => {
  const [gameState, setGameState] = useState(sampleGameState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize game state
    setIsInitialized(true);
  }, []);

  const handleAction = (action, amount) => {
    // Handle player actions here
    console.log('Player action:', action, amount);
    
    // Update game state based on action
    setGameState(prevState => {
      const newState = { ...prevState };
      
      // Update player chips and pot based on action
      switch (action) {
        case 'fold':
          // Handle fold action
          break;
        case 'call':
          if (amount) {
            const currentPlayer = newState.players.find(p => p.id === newState.currentPlayer);
            if (currentPlayer && currentPlayer.chips >= amount) {
              currentPlayer.chips -= amount;
              currentPlayer.bet += amount;
              newState.pot += amount;
            }
          }
          break;
        case 'raise':
          if (amount) {
            const currentPlayer = newState.players.find(p => p.id === newState.currentPlayer);
            if (currentPlayer && currentPlayer.chips >= amount) {
              currentPlayer.chips -= amount;
              currentPlayer.bet += amount;
              newState.pot += amount;
            }
          }
          break;
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