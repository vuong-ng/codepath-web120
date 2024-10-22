import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from './Components/CoinInfo';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const url = 'https://min-api.cryptocompare.com/data/all/coinlist'
function App() {
  const [list, setList] = useState(null)
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const options = {
      method: 'GET',
      authorization: API_KEY,
    }
    async function fetchAllCoinData() {
      const response = await fetch(url, options)
      const data = await response.json();
      setList(data);
      console.log(data)
    }
    fetchAllCoinData().catch(console.error);
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };
  return (
    <div className='whole-page'>
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <ul>
        {searchInput.length > 0 ?
          Object.entries(filteredResults).map(([coin]) => (
            list.Data[coin].PlatformType === "blockchain" ? (
              <CoinInfo
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
                key={list.Data[coin].Symbol}
              />
            ) : null)) 
            :
          list && Object.entries(list.Data).map(([coin]) => 
            list.Data[coin].PlatformType === "blockchain" ? 
            <CoinInfo
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
                key={list.Data[coin].Symbol}
            />
        : null
          )
        }
      </ul>
    </div>
  )
}

export default App
