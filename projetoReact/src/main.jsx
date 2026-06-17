 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
 import './index.css'
 // main.jsx é a porta de entrada da aplicação React.
 // Ele encontra a div #root no index.html e renderiza o componente App.
 ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <App />
 </React.StrictMode>,
 )