import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Layout from './routes/Layout';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>
)
