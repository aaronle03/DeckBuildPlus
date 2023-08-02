import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Builder.css';

const Builder = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
    axios.get('http://localhost:5000/api/cards')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    }, []);

    return (
        <div class="builder-container">
            <div class="builder-items">
                <div class="builder-items-left">
                    <div class="builder-filter">
                        <div class="filter-card-cost">
                            <h2>Card Cost</h2>
                            <section class="filter-card-buttons">
                                <button>0</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6+</button>
                            </section>
                        </div>
                        <div class="filter-card-power">
                            <h2>Card Power</h2>
                            <section class="filter-card-buttons">
                                <button>0</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6+</button>
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
                                <li key={card.id}>
                                  <strong>Card Name:</strong> {card.cardName}<br />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="builder-items-right">

                </div>
            </div>
        </div>
    )
}

export default Builder