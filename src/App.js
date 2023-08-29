import React from 'react';
import Navbar from './components/Navbar';
import Builder from './pages/Builder';

const App = () => {
  return (
    <div class="app-container">
      <Navbar></Navbar>
      <Builder></Builder>
    </div>
  );
};

export default App;
