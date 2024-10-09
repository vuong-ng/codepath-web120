import { useState } from 'react'
import APIForm from './components/APIForm';
import './App.css'

function App() {
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
  const [inputs, setInputs] = useState({
    url: '',
    format: '',
    no_ads: '',
    no_cookie_banners: '',
    width: '',
    height: '',
  });

  const submitForm = () => {

  }

  return (
    <div className='whole-page'>
      <h1>Build Your Own Screenshot! </h1>
      <APIForm
        inputs={inputs}
        handleChange={(e) => {
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }}
        onSubmit={submitForm}>
      </APIForm>
      <br />
      <br />
    </div>
  )
}

export default App
