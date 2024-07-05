import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import background from './images/wallpaper.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img className='background' src={background} alt='' />
    <App />
  </React.StrictMode>
);

