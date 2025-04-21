import { rankHand } from './gameUtils';

const BOT_STYLES = {
  aggressive: {
    raise: 0.7,
    call: 0.2,
    fold: 0.1,
    bluffChance: 0.4
  },
  conservative: {
    raise: 0.2,
    call: 0.6,
    fold: 0.2,
    bluffChance: 0.1
  },
  random: {
    raise: 0.3,
    call: 0.4,
    fold: 0.3,
    bluffChance: 0.3
  }
};

const getBotStyle = (botId) => {
  const styles = Object.keys(BOT_STYLES);
  return BOT_STYLES[styles[botId % styles.length]];
};

const weightedRandom = (weights) => {
  const total = Object.values(weights).reduce((a, b) => a + b, 0);
  const random = Math.random() * total;
  let current = 0;
  
  for (const [action, weight] of Object.entries(weights)) {
    current += weight;
    if (random <= current) return action;
  }
  
  return 'fold';
};

export const makeBotDecision = (bot, currentBet, minBet, isSeen) => {
  const style = getBotStyle(bot.id);
  const handRank = rankHand(bot.cards);
  const handStrength = handRank.rank / 6; // Normalize to 0-1
  
  // If bot hasn't seen cards, make a random decision
  if (!isSeen) {
    return makeBlindDecision(bot, currentBet, minBet, style);
  }

  // If bot has seen cards, evaluate hand strength
  return makeSeenDecision(bot, currentBet, minBet, style, handStrength);
};

const makeBlindDecision = (bot, currentBet, minBet, style) => {
  if (bot.balance < minBet) {
    return 'fold';
  }

  const weights = {
    raise: style.raise * 0.5,
    call: style.call,
    fold: style.fold
  };

  return weightedRandom(weights);
};

const makeSeenDecision = (bot, currentBet, minBet, style, handStrength) => {
  const betAmount = bot.isSeen ? minBet * 2 : minBet;
  
  if (bot.balance < betAmount) {
    return 'fold';
  }

  // Adjust weights based on hand strength
  const baseWeights = { ...style };
  
  // Strong hands are more likely to raise
  if (handStrength > 0.7) {
    baseWeights.raise *= 1.5;
    baseWeights.fold *= 0.5;
  }
  
  // Weak hands are more likely to fold
  if (handStrength < 0.3) {
    baseWeights.raise *= 0.5;
    baseWeights.fold *= 1.5;
  }

  // Add bluffing chance
  if (Math.random() < style.bluffChance) {
    baseWeights.raise *= 1.2;
    baseWeights.fold *= 0.8;
  }

  return weightedRandom(baseWeights);
};

export const getBotEmotion = (action, handStrength) => {
  if (action === 'fold') {
    return 'sad';
  }
  
  if (action === 'raise') {
    return handStrength > 0.7 ? 'happy' : 'thinking';
  }
  
  return 'neutral';
}; 