import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Builder from './pages/Builder';
import CardIndex from './pages/CardIndex';
import PersonalDeck from './pages/PersonalDeck';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Builder />} />
          <Route path="/CardIndex" element={<CardIndex />} />
          <Route path="/PersonalDeck" element={<PersonalDeck />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
