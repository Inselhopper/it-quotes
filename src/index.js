// React
import React from 'react';
import ReactDOM from 'react-dom';

// Semeantic
import "./css/semantic.min.css";

// Components
import App from './App';

// Data
//import { names } from "./data";
import { quotes } from "./data/quotes";

ReactDOM.render(
  <React.StrictMode>
    <App quotes={quotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);

