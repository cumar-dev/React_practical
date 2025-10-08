import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogMessage from "./script.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <BlogMessage />
  </StrictMode>,
)
