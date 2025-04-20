// Sound effects for poker game
const sounds = {
  cardDeal: new Audio('/sounds/card-deal.mp3'),
  chipStack: new Audio('/sounds/chip-stack.mp3'),
  fold: new Audio('/sounds/fold.mp3'),
  call: new Audio('/sounds/call.mp3'),
  raise: new Audio('/sounds/raise.mp3'),
  win: new Audio('/sounds/win.mp3'),
  lose: new Audio('/sounds/lose.mp3'),
  chat: new Audio('/sounds/chat.mp3'),
  button: new Audio('/sounds/button.mp3'),
};

// Function to play sound with volume control
export const playSound = (soundName, volume = 0.5) => {
  const sound = sounds[soundName];
  if (sound) {
    sound.volume = volume;
    sound.play().catch(error => console.log('Sound play error:', error));
  }
};

// Function to stop all sounds
export const stopAllSounds = () => {
  Object.values(sounds).forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });
};

export default sounds; 