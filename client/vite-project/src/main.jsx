import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'
import {HelmetProvider} from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
<div onContextMenu={(e)=>e.preventDefault()}></div>
    <App />
    <CssBaseline />
    </HelmetProvider>
  </StrictMode>,
)
