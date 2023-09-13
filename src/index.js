import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Resume/>
  </React.StrictMode>
);

reportWebVitals();
