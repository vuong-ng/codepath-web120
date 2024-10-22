import { useState, useEffect, useLayoutEffect } from 'react'
import RecipeCard from './components/RecipeCard';

import './App.css'
// const API_KEY = import.meta.env.VITE_APP_API_KEY;
function App() {
  const [randomList, setRandomList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  // const tagsList = ['vegan', 'gluten','diary-free',]
  
  useLayoutEffect(() => {
    const url = 'https://api.openbrewerydb.org/v1/breweries'
    const options = {
      method: 'GET',
      // authorization: API_KEY,
    }
    async function fetchAllData() {
      const response = await fetch(url, options)
      const data = await response.json();
      setRandomList(data);
      console.log(data)
    }

    fetchAllData().catch(console.error);
  },[])
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
        const filteredData = randomList.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredResults(filteredData);
    } else {
        setFilteredResults(randomList);
    }
};
  return (
    <>
        <div className='whole-page'>
            <h1>Your Brew Handbook</h1>
        <h3>What are you craving...?</h3>
        <h2>Total beweries: {randomList.length}</h2>
        <h2>Filtered: {filteredResults.length}</h2>
        <h2></h2>
            <br />
            <input
                type="text"
                placeholder="Search..."
                onChange={(inputString) => searchItems(inputString.target.value)}
            />
            <div className="img-container">
                <ul>
                    {searchInput.length > 0 ? (
                        filteredResults.map((brew) => (
                            <li key={brew.id}>
                                <h2>{brew.name}</h2>
                                <h3>{brew.country}</h3>
                                <h4>{brew.address}</h4>
                            </li>
                        ))
                    ) : (
                        randomList.map((brew) => (
                            <li key={brew.id}>
                                <h2>{brew.name}</h2>
                                <h3>{brew.country}</h3>
                                <h4>{brew.address}</h4>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    </>
);
}

export default App
