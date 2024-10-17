import React, { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState()
  const [basicInfo, setBasicInfo] = useState({})
  const [banList, setBanList] = useState([])
  const [bannedList, setBannedList] = useState([])
  // const allCountries = ['Egypt', 'Greece', 'United States', 'United Arab Emirates', 'Australia', 'France', 'United Kingdom', 'Burma', 'Canada', 'Cyprus', 'Russia', 'China', 'Japan', 'Isle of Man', 'Norway', 'Iran (Persia)', 'Singapore', 'Somalia', 'Turkey', 'Thailand'];
  const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;
  let storedData = [];
  const callAPI = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=30&has_breeds=1`
    let storedData = [];
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    });
      let data = await response.json();
      // data = data.filter(img => img.image?.url != null);
      storedData = data;
      return storedData;
  }

  const handleDiscover = async () => {
    // const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;
    storedData = await callAPI();
    console.log(storedData[0]);
    const filteredData = storedData.filter(item => {
      const breeds = item.breeds[0];
      const weight = breeds['weight'];
      const name = breeds['name'];
      const origin = breeds['origin'];
      return !bannedList.includes(weight) && !bannedList.includes(name) && !bannedList.includes(origin);
  });

  if (filteredData.length > 0) {
      const randomItem = filteredData[Math.floor(Math.random() * filteredData.length)];
      const breeds = randomItem.breeds[0];
      const weight = breeds['weight'];

      setBasicInfo({
          years: `${weight.metric} years`,
          name: `${breeds.name}`,
          origin: `${breeds.origin}`
      });
      setCurrentImage(randomItem.url);
  } else {
      console.error("No valid items found after filtering");
  }
  }

  const reset = () => {
    setBasicInfo({
      years: '',
      name: '',
      origin: ''
    });
    setBanList([])
  }
  return (
    <>
    <div className='whole-page'>
      <div className='main-window'>
        <div className='heading'>
          <h1>Veni Vici!</h1>
          <h4>Discover cats from your wildest dreams!</h4>
          <p>😺😸😹😻😼😽🙀😿😾</p>

          <div className='display-result'>
          <div className='attribute-list'>
            {basicInfo && Object.entries(basicInfo).map(([category, value], index) => (
              <Form
                key={index}
                attribute={value}
                handleClick={(e) => {
                  if (!banList.includes(e.target.value)){
                    setBanList((prevBanList) => [...prevBanList, e.target.value])
                  }
                }}
              />
            ))}
            </div>

            <img id='cat-img' src={currentImage} alt="Current cat image" />

          </div>
          <div>
            <button className='discover-button' onClick={handleDiscover}>Discover</button>
            </div>
        </div>
      </div>

        <div className='ban-list'>
          <h4>Attribute to be in ban list</h4>
          <div className='bannable-attribute'>
          {banList && banList.map((value, index) => (
          <Form
            key={index}
            attribute={value}
              // handleClick={(e) => { setBannedList((prevBannedList) => [...prevBannedList, e.target.value]) }}
              handleClick={(e) => {
                setBannedList((prevBannedList) => [...prevBannedList, e.target.value]);
                let filteredBanList = banList.filter(item => item != e.target.value);
                setBanList(filteredBanList);
              }}
          ></Form>
        ))}
          </div>
      </div>
      </div>
      </>
  )
}

export default App
