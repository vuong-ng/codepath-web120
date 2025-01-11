import { StrictMode,RouterProvider } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App/>
    </BrowserRouter>
   </StrictMode>,
  // <RouterProvider router={<App/>} />
)
