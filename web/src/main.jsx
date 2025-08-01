import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToAnchorOrTop from './lib/ScrollToAnchorOrTop.js'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Router>
      <ScrollToAnchorOrTop/>
      <App />
    </Router>
  </StrictMode>,
)
