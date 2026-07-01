import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './styles/index.css' // <-- Verify this line is exactly here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)