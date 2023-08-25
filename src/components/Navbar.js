import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <section className='logo'>
        <section className='logo-title'>
          <h1>DECKBUILD+</h1>
          <h3>Marval Snap Deck Builder</h3>
        </section>
      </section>
      <section className='navbar-links'>
        <Link to="/">BUILDER ⚙️</Link>
        <Link to="/PersonalDeck">MY DECKS 🔥</Link>
        <Link to="/CardIndex">CARD INDEX 📖</Link>
      </section>
      <section>
      </section>
    </nav>
  )
}

export default Navbar;
