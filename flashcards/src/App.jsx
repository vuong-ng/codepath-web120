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
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
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
      back: `Fashion`,
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
    while (n == currentCard) {
      n = Math.floor(Math.random() * flashcards.length);
    }
    if (flip) {
      setFlip(!flip);
    };
    setCurrentCard(n);
    setInput('');
    setResult('');
  }

  const next = () => {
    if (currentCard == flashcards.length-1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    };
    setInput('');
    setResult('');
  };

  const back = () => {
      if (currentCard == 0) {
        setCurrentCard(flashcards.length-1);
      } else {
        setCurrentCard(currentCard - 1);
    };
    setInput('');
    setResult('');
  };

  const onCheckAnswer = () => {
    if (input == flashcards[currentCard].back) {
      setResult('correct');
    } else {
      setResult('wrong');
    };
  };
  console.log(result);
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
      <div className='answer'>
          <form className='container'>
          {/* <div id={result} className='result'> */}
            <input id={result} className='input' type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
          {/* </div> */}
          </form>
          <button
            type='submit'
            className='onCheckAnswer'
            onClick={onCheckAnswer}
          >
            Submit
          </button>
      </div>
      <div>
      <button onClick={next}>Next</button>
      <button onClick={back}>Back</button>
      <button onClick={randomCard}>Shuffle</button>
      </div>
    </>
  )
}

export default App
