import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameSelectionPage from './components/GameSelectionPage';
import PokerTable from './components/PokerTable';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game-selection" element={<GameSelectionPage />} />
          <Route path="/poker-table" element={<PokerTable />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
