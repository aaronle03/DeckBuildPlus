import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/Cards')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Cards List</h1>
      <ul>
        {cards.map(product => (
          <li key={cards.cardsInfo}></li>
        ))}
      </ul>
    </div>
  )
}

export default App