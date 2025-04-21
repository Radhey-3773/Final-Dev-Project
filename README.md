# Teen Patti Card Game

A modern implementation of the popular Indian card game Teen Patti (Three Cards) built with React and Tailwind CSS. This game brings the traditional card game experience to the digital world with beautiful UI, smooth animations, and intelligent bot players.

## 🎮 Features

- **Modern UI**: Beautiful and responsive design with smooth animations
- **Multiplayer Support**: Play against AI bots with different personalities
- **Realistic Gameplay**: 
  - Card dealing and shuffling animations
  - Chip stacking and betting mechanics
  - Dealer button rotation
  - Card visibility controls
- **Game Controls**:
  - Fold, Call, and Raise actions
  - Dynamic betting system
  - Card viewing mechanics
- **Responsive Design**: Works seamlessly on both desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── GameBoard.jsx   # Main game logic and state management
│   ├── PokerTable.jsx  # Game table and player positions
│   ├── Card.jsx        # Card component with animations
│   ├── Chip.jsx        # Chip stack visualization
│   ├── BotAvatar.jsx   # Bot player avatars
│   └── Controls.jsx    # Game action controls
├── utils/             # Utility functions
│   ├── gameUtils.js    # Game mechanics and rules
│   ├── botLogic.js     # AI bot decision making
│   ├── sounds.js       # Sound effects
│   └── sampleGameState.js # Initial game state
└── assets/            # Images and other static assets
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd teen-patti-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` to play the game

## 🎯 Game Rules

- Each player is dealt 3 cards
- Players take turns to fold, call, or raise
- The game follows standard Teen Patti hand rankings
- The player with the best hand wins the pot
- Bots make decisions based on their hand strength and game situation

## 🎨 UI Components

- **Poker Table**: Responsive layout with player positions
- **Cards**: Animated card dealing and flipping
- **Chips**: Visual representation of bets and pot
- **Controls**: Intuitive action buttons and betting interface
- **Player Info**: Clear display of player status and chips

## 🤖 Bot Players

The game features AI bots with different playing styles:
- Conservative: Plays safe with strong hands
- Aggressive: Takes risks and bluffs
- Balanced: Mixes different strategies

## 📱 Responsive Design

The game adapts to different screen sizes:
- Desktop: Full table view with all players visible
- Mobile: Optimized layout for smaller screens
- Touch-friendly controls for mobile devices

## 🎵 Sound Effects

- Card dealing and flipping
- Chip stacking and betting
- Game action sounds
- Background music

## 🔄 Game Flow

1. Players join the table
2. Cards are dealt
3. Betting round begins
4. Players take turns to act
5. Showdown if multiple players remain
6. Winner takes the pot
7. New round begins

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by traditional Teen Patti card game
- Built with modern web technologies
- Special thanks to the open-source community
