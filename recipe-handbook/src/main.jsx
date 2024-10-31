import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Layout from './routes/Layout';
import About from './routes/About.jsx';
import DetailView from "./routes/DetailView"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/about" element={<About />} />
        <Route index={true} element={<App />} />
        <Route path="/brewDetails/:id" index={false} element={<DetailView />}/>
    </Route>
  </Routes>
</BrowserRouter>
)
