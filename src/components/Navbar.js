import React from 'react';
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
                <a href="https://www.google.com/">BUILDER ⚙️</a>
                <a href="https://www.google.com/">CARD INDEX 📖</a>
                <a href="https://www.google.com/">POPULAR DECKS 🔥</a>
          </section>
          <section>
          </section>
      </nav>
  )
}

export default Navbar