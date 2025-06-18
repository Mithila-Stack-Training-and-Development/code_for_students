import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CounterProvider from './provider/CounterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>,
)
