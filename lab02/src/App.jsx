import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import samosa from './assets/samosa.jpg';


function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);

  return (
    <div className='App'>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src={samosa} alt="" className='samosa' onClick={updateCount}/>
      </div>
    </div>
  )
}

export default App
