import React from 'react';
import ReactDOM from 'react-dom/client';
// import dotenv from 'dotenv'; // Import dotenv
import './index.css';
import App from './App';
// dotenv.config(); // Load environment variables from .env

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


