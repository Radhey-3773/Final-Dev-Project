export const sampleGameState = {
  tableId: "1",
  smallBlind: 10,
  bigBlind: 20,
  minRaise: 20,
  currentBet: 20,
  pot: 100,
  dealerPosition: 0,
  currentPlayer: "human",
  phase: "flop", // preflop, flop, turn, river, showdown
  players: [
    {
      id: "human",
      name: "You",
      chips: 1000,
      bet: 20,
      cards: [
        { value: "A", suit: "♥" },
        { value: "K", suit: "♠" }
      ],
      isBot: false,
      isThinking: false,
      avatar: "👤"
    },
    {
      id: "bot1",
      name: "Bot 1",
      chips: 950,
      bet: 20,
      cards: [
        { value: "Q", suit: "♦" },
        { value: "J", suit: "♣" }
      ],
      isBot: true,
      isThinking: true,
      avatar: "🤖"
    },
    {
      id: "bot2",
      name: "Bot 2",
      chips: 1020,
      bet: 0,
      cards: [
        { value: "10", suit: "♥" },
        { value: "9", suit: "♦" }
      ],
      isBot: true,
      isThinking: false,
      avatar: "🤖"
    },
    {
      id: "bot3",
      name: "Bot 3",
      chips: 980,
      bet: 0,
      cards: [
        { value: "8", suit: "♠" },
        { value: "7", suit: "♣" }
      ],
      isBot: true,
      isThinking: false,
      avatar: "🤖"
    }
  ],
  communityCards: [
    { value: "A", suit: "♦" },
    { value: "K", suit: "♥" },
    { value: "Q", suit: "♠" }
  ],
  chatMessages: [
    { sender: "Bot 1", text: "Good luck everyone!" },
    { sender: "Bot 2", text: "Let's play!" },
    { sender: "Bot 3", text: "I'm ready!" }
  ]
};

// Function to generate random cards
export const generateRandomCards = (count) => {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const suits = ["♥", "♦", "♠", "♣"];
  const cards = [];
  
  for (let i = 0; i < count; i++) {
    const value = values[Math.floor(Math.random() * values.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    cards.push({ value, suit });
  }
  
  return cards;
};

// Function to update game state
export const updateGameState = (state, updates) => {
  return { ...state, ...updates };
}; 