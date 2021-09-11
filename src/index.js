import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <h1 className='title'>Our <span>Rev</span>iews</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
