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
                <a href="/">BUILDER ⚙️</a>
                <a href="https://www.linkedin.com/in/aaronctle/">CREATED BY AARON LE 🔥</a>
          </section>
          <section>
          </section>
      </nav>
  )
}

export default Navbar