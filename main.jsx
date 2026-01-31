import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jets from './jets.jsx'
import Tejas from './compontent/tejas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Jets /> */}
    <Tejas />

  </StrictMode>,
)
