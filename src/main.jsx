import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieProvider from './providers/movie'
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>,
)
