import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function clock() {
  const el = (
    <div>
      <h2>This is Clock!</h2>
      <h3>Time is {new Date().toLocaleTimeString()}</h3>
    </div>
  );
  root.render(el);
}
setInterval(clock, 0);
