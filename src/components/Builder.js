import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Builder.css';

const Builder = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchCards();
  }, []);

    const [selectedCosts, setSelectedCosts] = useState([]);
    const [selectedPowers, setSelectedPowers] = useState([]);

    const handleCostButtonClick = (value) => {
      setSelectedCosts(prevSelectedCosts => {
        if (prevSelectedCosts.includes(value)) {
          return prevSelectedCosts.filter(val => val !== value);
        } else {
          return [...prevSelectedCosts, value];
        }
      });
    };

    const handlePowerButtonClick = (value) => {
      setSelectedPowers(prevSelectedPowers => {
        if (prevSelectedPowers.includes(value)) {
          return prevSelectedPowers.filter(val => val !== value);
        } else {
          return [...prevSelectedPowers, value];
        }
      });
    };

    return (
        <div class="builder-container">
            <div class="builder-items">
                <div class="builder-items-left">
                    <div class="builder-filter">
                        <div class="filter-card-cost">
                            <h2>Card Cost</h2>
                            <section class="filter-card-buttons">
                                <button
                                    className={selectedCosts.includes('0') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('0')}
                                >0</button>
                                <button
                                    className={selectedCosts.includes('1') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('1')}
                                >1</button>
                                <button
                                    className={selectedCosts.includes('2') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('2')}
                                >2</button>
                                <button
                                    className={selectedCosts.includes('3') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('3')}
                                >3</button>
                                <button
                                    className={selectedCosts.includes('4') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('4')}
                                >4</button>
                                <button
                                    className={selectedCosts.includes('5') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('5')}
                                >5</button>
                                <button
                                    className={selectedCosts.includes('6') ? 'active' : ''}
                                    onClick={() => handleCostButtonClick('6')}
                                >6+</button>
                            </section>
                        </div>
                        <div class="filter-card-power">
                            <h2>Card Power</h2>
                            <section class="filter-card-buttons">
                                <button
                                    className={selectedPowers.includes('0') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('0')}
                                >0</button>
                                <button
                                    className={selectedPowers.includes('1') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('1')}
                                >1</button>
                                <button
                                    className={selectedPowers.includes('2') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('2')}
                                >2</button>
                                <button
                                    className={selectedPowers.includes('3') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('3')}
                                >3</button>
                                <button
                                    className={selectedPowers.includes('4') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('4')}
                                >4</button>
                                <button
                                    className={selectedPowers.includes('5') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('5')}
                                >5</button>
                                <button
                                    className={selectedPowers.includes('6') ? 'active' : ''}
                                    onClick={() => handlePowerButtonClick('6')}
                                >6</button>
                                
                            </section>
                        </div>
                        <div className="filter-card-keyword">
                            <h2>Card Keyword</h2>
                            <select>
                                <option value="option1">All</option>
                                <option value="option2">Destroy</option>
                                <option value="option3">Discard</option>
                                <option value="option4">Move</option>
                                <option value="option5">Ongoing</option>
                                <option value="option6">On Reveal</option>
                            </select>
                        </div>
                        <div className="filter-card-sortby">
                            <h2>Sort By</h2>
                            <select>
                                <option value="option1">Alphabetical</option>
                                <option value="option2">Card Cost</option>
                                <option value="option3">Card Power</option>
                            </select>
                        </div>
                    </div>
                    <div class="builder-cards">
                        <ul>
                            {cards.map(card => (
                                <img
                                src={require(`../imgs/${card.cardid}.webp`).default}
                                alt={card.name}
                              />
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="builder-items-right">
                    <div class="builder-items-right-buttons">
                        <button>Save</button>
                        <button>Clear</button>
                    </div>
                    <div class="builder-items-personal-deck">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Builder