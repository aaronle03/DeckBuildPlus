import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Builder.css';

const Builder = () => {
    const [cards, setCards] = useState([]);
    const [powerFilter, setPowerFilter] = useState(false);

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
        setSelectedCosts((prevSelectedCosts) => {
          if (prevSelectedCosts.includes(value)) {
            return prevSelectedCosts.filter((val) => val !== value);
          } else {
            return [...prevSelectedCosts, value];
          }
        });
        setPowerFilter(false); // Reset power filter when cost filter changes
    };

    const handlePowerButtonClick = (value) => {
        setSelectedPowers((prevSelectedPowers) => {
          if (prevSelectedPowers.includes(value)) {
            return prevSelectedPowers.filter((val) => val !== value);
          } else {
            return [...prevSelectedPowers, value];
          }
        });
        setPowerFilter(value === '1'); // Step 2: Activate power filter when value is '1'
    };

    const [selectedKeyword, setSelectedKeyword] = useState('option1'); // State for selected keyword
    const [selectedSortBy, setSelectedSortBy] = useState('option1'); // State for selected sort option

    const handleKeywordChange = (event) => {
      setSelectedKeyword(event.target.value);
    };

    const handleSortByChange = (event) => {
      setSelectedSortBy(event.target.value);
    };



    const PERSONAL_DECK_LIMIT = 12;
    const [personalDeck, setPersonalDeck] = useState([]);

    const addToPersonalDeck = (cardName) => {
        if (personalDeck.length < PERSONAL_DECK_LIMIT &&!personalDeck.includes(cardName)) {
            setPersonalDeck((prevDeck) => [...prevDeck, cardName]);
        }
    };

    const clearPersonalDeck = () => {
        setPersonalDeck([]);
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
                            <select value={selectedKeyword} onChange={handleKeywordChange}>
                              <option value="option1">All</option>
                              <option value="option2">Card Draw</option>
                              <option value="option3">Destroy</option>
                              <option value="option4">Discard</option>
                              <option value="option5">Move</option>
                              <option value="option6">Ongoing</option>
                              <option value="option7">On Reveal</option>
                            </select>
                        </div>
                        <div className="filter-card-sortby">
                            <h2>Sort By</h2>
                            <select value={selectedSortBy} onChange={handleSortByChange}>
                              <option value="option1">Alphabetical</option>
                              <option value="option2">Card Cost</option>
                              <option value="option3">Card Power</option>
                            </select>
                        </div>
                    </div>
                    <div class="builder-cards">
                        <ul>
                            {cards
                                .filter((card) => (
                                    selectedPowers.length === 0 || selectedPowers.includes(card.power.toString())
                                ))
                                .filter((card) => (
                                    selectedCosts.length === 0 || selectedCosts.includes(card.cost.toString())
                                ))
                                .filter((card) => {
                                    console.log(card.abilities);
                                
                                    if (selectedKeyword === 'option1') {
                                        return true
                                    } else if (selectedKeyword === 'option2') {
                                        return card.abilities.includes('Card Draw') || card.abilities.includes('Card Draw');
                                    } else if (selectedKeyword === 'option3') {
                                        return card.abilities.includes('Destroy') || card.abilities.includes('Destroy');
                                    } else if (selectedKeyword === 'option4') {
                                        return card.abilities.includes('Discard') || card.abilities.includes('Discard');
                                    } else if (selectedKeyword === 'option5') {
                                        return card.abilities.includes('Move') || card.abilities.includes('Move');
                                    } else if (selectedKeyword === 'option6') {
                                        return card.abilities.includes('Ongoing') || card.abilities.includes('Ongoing');
                                    } else if (selectedKeyword === 'option7') {
                                        return card.abilities.includes('On Reveal') || card.abilities.includes('On Reveal');
                                    }
                                
                                    
                                    return false;
                                })
                                .sort((a, b) => {
                                    if (selectedSortBy === 'option1') return a.name.localeCompare(b.name);
                                    if (selectedSortBy === 'option2') return a.cost - b.cost;
                                    if (selectedSortBy === 'option3') return a.power - b.power;
                                })
                                .map((card) => (
                                  <img
                                    src={`https://snapjson.untapped.gg/art/render/framebreak/common/512/${card.carddefid}.webp`}
                                    alt={card.name}
                                    key={card.cardid}
                                    onClick={() => addToPersonalDeck(card.name)}
                                  />
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="builder-items-right">
                    <div class="builder-items-right-buttons">
                        <button>Save</button>
                        <button onClick={clearPersonalDeck}>Clear</button>
                    </div>
                    <div class="builder-items-personal-deck">
                        <h2>Personal Deck</h2>
                        <ul>
                            {personalDeck.map((cardName, index) => (
                                <li key={index}>{cardName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Builder