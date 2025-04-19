export const createDeck = () => {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }

  return shuffleDeck(deck);
};

export const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const cardValue = (value) => {
  const order = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  return order.indexOf(value);
};

export const rankHand = (cards) => {
  const values = cards.map(c => c.value);
  const suits = cards.map(c => c.suit);

  const isSameSuit = suits.every(s => s === suits[0]);
  const sorted = [...values].sort((a, b) => cardValue(b) - cardValue(a));
  const uniqueValues = [...new Set(values)];

  const isSequence = (cardValue(sorted[0]) === cardValue(sorted[1]) + 1) &&
                    (cardValue(sorted[1]) === cardValue(sorted[2]) + 1);

  const countMap = {};
  for (const val of values) countMap[val] = (countMap[val] || 0) + 1;

  const counts = Object.values(countMap);

  if (counts.includes(3)) return { rank: 6, label: "Trail" };
  if (isSameSuit && isSequence) return { rank: 5, label: "Pure Sequence" };
  if (isSequence) return { rank: 4, label: "Sequence" };
  if (isSameSuit) return { rank: 3, label: "Color" };
  if (counts.includes(2)) return { rank: 2, label: "Pair" };
  return { rank: 1, label: "High Card" };
};

export const compareHands = (hand1, hand2) => {
  const rank1 = rankHand(hand1);
  const rank2 = rankHand(hand2);

  if (rank1.rank !== rank2.rank) {
    return rank1.rank - rank2.rank;
  }

  // If ranks are equal, compare high cards
  const values1 = hand1.map(c => cardValue(c.value)).sort((a, b) => b - a);
  const values2 = hand2.map(c => cardValue(c.value)).sort((a, b) => b - a);

  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i]) {
      return values1[i] - values2[i];
    }
  }

  return 0;
};

export const dealCards = (deck, numPlayers) => {
  const players = Array(numPlayers).fill().map((_, index) => ({
    id: index,
    name: index === 0 ? 'You' : `Bot ${index}`,
    cards: [],
    balance: 1000,
    isSeen: false,
    isActive: false,
    isFolded: false
  }));

  // Deal 3 cards to each player
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < numPlayers; j++) {
      players[j].cards.push(deck[i * numPlayers + j]);
    }
  }

  return {
    deck: deck.slice(numPlayers * 3),
    players
  };
}; 