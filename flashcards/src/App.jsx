import { useState } from 'react'
// import React from 'react'
import flower from './assets/flower.svg';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [flashcard, setFlashcard] = useState({});
  // const [flashcards, setFlahscards] = useState([]);
  const [flip, setFlip] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  // setFlip = (card) => {
  //   if (!flip) {
  //     flip = !flip;
  //     }
  // } 

  const flashcards = [
    {
      front: `What does the Giant smell when he says "Fee, Fi, Foe, Fum"?`,
      back: `The blood of an Englishman`,
      difficulty: `Hard`,
    },
    {
      front: `What artist's largest work is called "The Night Watch"?`,
      back: `Rembrandt's`,
      difficulty:`Medium`,
    },
    {
      front: `After giving up mural painting, Gustav Klimt designed for what industry?`,
      back: `What color is the "Mind stone" in the 2017 Marvel Legacy relaunch?`,
      difficulty:`Easy`,
      
    },
    {
      front: `Who wrote the children's classic "Green Eggs and Ham"?`,
      back: `Dr. Seuss`,
      difficulty:`Hard`,
    },
    {
      front: `In the novel "Dances with Wolves," what is the name of John Dunbar's horse?`,
      back: `Cisco`,
      difficulty:`Medium`,
    },
    {
      front: `Which classic novel's subtitle is "The Modern Prometheus"?`,
      back:`Frankenstein`,
      difficulty:`Easy`
    }
  ]

  const randomCard = () => {
    var n = Math.floor(Math.random() * flashcards.length);
    if (flip) {
      setFlip(!flip);
    }
    setCurrentCard(n);
  }

  return (
    <>
      <div>
        <h1>Literature trivia</h1>
        <h4>Test your Literature knowledge here!</h4>
        <h6>Number of card: {flashcards.length}</h6>
      </div>
      <div className={`card ${flashcards[currentCard].difficulty}`} onClick={() => {setFlip(!flip)}}>
        <p>{flip ? flashcards[currentCard].back : flashcards[currentCard].front}</p>
        <img src={flower}/>
      </div>
      <button onClick={randomCard}>Next
      </button>
    </>
  )
}

export default App
