import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import goldRushImage from '../assets/gold-rush-40mm.png';

const GameSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d1f1f] to-[#1a1a1a] relative overflow-hidden">
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#FDB931] rounded-full flex items-center justify-center shadow-lg shadow-[#D4AF37] overflow-hidden"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
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
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDB931] mb-4">
            Play Game
          </h1>
          <p className="text-xl text-white opacity-80 font-light">
            Experience the Ultimate Teen Patti
          </p>
        </motion.div>

        {/* Button Group */}
        <div className="flex flex-col items-center gap-8">
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#FDB931] text-black font-bold py-6 px-16 rounded-full text-2xl shadow-lg shadow-[#D4AF37] hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/poker-table')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start New Game
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDB931] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="group relative overflow-hidden bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-4 px-12 rounded-full text-xl hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg shadow-[#D4AF37]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </span>
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#D4AF37] rounded-full opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-[#D4AF37] rounded-full opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-[#D4AF37] rounded-full opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-[#D4AF37] rounded-full opacity-20" />

        {/* Footer */}
        <motion.footer 
          className="absolute bottom-4 text-white opacity-50 text-sm"
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

export default GameSelectionPage; 