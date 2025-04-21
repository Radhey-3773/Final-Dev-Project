import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import goldRushImage from '../assets/gold-rush-40mm.png';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Raleway:wght@300;400;500&display=swap');
</style>

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0F]">
      {/* Dark Metallic Background Effect */}
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

      {/* Metallic Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiMyMjIyMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-5" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(147,112,219,0.1) 0%, rgba(147,112,219,0.3) 50%, rgba(147,112,219,0.1) 100%)',
          boxShadow: '0 0 30px rgba(147,112,219,0.2), inset 0 0 20px rgba(147,112,219,0.2)'
        }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(192,192,232,0.1) 0%, rgba(192,192,232,0.3) 50%, rgba(192,192,232,0.1) 100%)',
          boxShadow: '0 0 30px rgba(192,192,232,0.2), inset 0 0 20px rgba(192,192,232,0.2)'
        }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, -360],
          scale: [1, 1.3, 1]
        }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        {/* Logo Area */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-40 h-40 mx-auto mb-8 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30,30,46,0.8) 0%, rgba(41,41,61,0.8) 50%, rgba(30,30,46,0.8) 100%)',
              boxShadow: '0 0 50px rgba(147,112,219,0.15)'
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <img 
              src={goldRushImage} 
              alt="Gold Rush Logo" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="relative overflow-visible h-32 max-w-3xl mx-auto">
            <motion.div
              className="absolute inset-0 blur-xl bg-gradient-to-r from-[#9370DB] via-[#8A2BE2] to-[#9370DB] opacity-20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h1 
              className="text-7xl font-bold relative"
              style={{
                background: 'linear-gradient(to right, #C8B6E2, #9370DB, #C8B6E2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                textDecoration: 'none',
                borderBottom: 'none',
                paddingBottom: '0',
                marginBottom: '0',
                lineHeight: '1',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.02em'
              }}
            >
              Teen Patti
            </h1>
          </div>
          <motion.p 
            className="text-2xl font-light tracking-widest"
            style={{
              background: 'linear-gradient(to right, #E6E6FA, #B8B8E6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Where Legends Are Forged
          </motion.p>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-medium tracking-wider font-cinzel"
            style={{
              background: 'linear-gradient(to right, #9370DB, #C8B6E2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(147,112,219,0.3)'
            }}
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            "Where Fortune Favors the Bold"
          </motion.h2>
          <motion.p
            className="mt-2 text-lg font-light tracking-widest font-raleway"
            style={{
              background: 'linear-gradient(to right, #B19CD9, #9370DB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.8
            }}
            animate={{
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Welcome to Pirates' Fortune
          </motion.p>
        </motion.div>

        {/* Get Started Button */}
        <motion.button
          className="group relative overflow-hidden py-6 px-20 rounded-full text-2xl font-bold transition-all duration-500"
          style={{
            background: 'linear-gradient(45deg, #8A2BE2, #9370DB, #8A2BE2)',
            boxShadow: '0 0 30px rgba(147,112,219,0.3)'
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 50px rgba(147,112,219,0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/game-selection')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative z-10 flex items-center gap-3 text-white font-extrabold tracking-wider">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            GET STARTED
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] via-[#9370DB] to-[#8A2BE2] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Button Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9370DB] via-[#8A2BE2] to-[#9370DB] rounded-full blur-xl opacity-30 group-hover:opacity-70 transition duration-500" />
        </motion.button>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <motion.div
            className="absolute inset-0 border-t-2 border-l-2 border-[#9370DB] rounded-tl-3xl"
            animate={{
              opacity: [0.3, 0.6, 0.3]
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
            className="absolute inset-0 border-b-2 border-r-2 border-[#9370DB] rounded-br-3xl"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Animated Card Symbols */}
        <motion.div 
          className="absolute top-10 right-10 text-[#9370DB] opacity-20 text-6xl"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ♠
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 text-[#9370DB] opacity-20 text-6xl"
          animate={{
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ♦
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="absolute bottom-4 text-[#9370DB] opacity-50 text-sm tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
        >
          © 2024 Teen Patti. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
};

export default LandingPage; 