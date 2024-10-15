import React, { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState()
  const [basicInfo, setBasicInfo] = useState({})
  const [otherInfo, setOtherInfo] = useState({})
  // const 
  // const [banCountries, setBanCountries] = useState([])
  // const [banYears, setBanYears] = useState([])
  // const [banBreeds, setBanBreeds] = useState([])
  // const [prevImages, setPrevImages] = useState([])
  const [banList, setBanList] = useState([])
  const [bannedList, setBannedList] = useState([])
  const allCountries = ['Egypt', 'Greece', 'United States', 'United Arab Emirates', 'Australia', 'France', 'United Kingdom', 'Burma', 'Canada', 'Cyprus', 'Russia', 'China', 'Japan', 'Isle of Man', 'Norway', 'Iran (Persia)', 'Singapore', 'Somalia', 'Turkey', 'Thailand'];
  let filter =allCountries.join();
  // const getAllCountries = async() => {
  //   const  response = await fetch(`https://api.thecatapi.com/v1/breeds`);
  //   const json = await response.json();
  //   for (const img of json) {
  //     if (!allCountries.includes(img.origin)){
  //       allCountries.push(img.origin);
  //     }
  //   }
  // }
  // getAllCountries();
  // console.log(allCountries.join())
  const handleDiscover = async () => {
    let filteredCountries = allCountries.filter(country => !bannedList.includes(country));
    console.log(filteredCountries);
    let filter = filteredCountries.join();
    const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;
    // console.log(filter);
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&has_breeds=1&breeds_origins=${filter}`;
    console.log(apiKey);
    const  response = await fetch(url);
    const  json = await response.json();
    let breeds = json[0].breeds[0];
    let weight = breeds['weight'];
      setBasicInfo({
        years: `${weight.metric} years`,
        name: `${breeds.name}`,
        origin:`${breeds.origin}`
      })
    setCurrentImage(json[0].url)
  }

  const handleBan = () => {
    // let i = allCountries.indexOf(value);
    // allCountries.splice(i, 1)
    // let filteredCountries = allCountries.filter(country => !bannedList.includes(country));
    // console.log(i, allCountries)
    // filter = allCountries.join();
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
