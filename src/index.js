// React
import React from 'react';
import ReactDOM from 'react-dom';

//jQuery
import jQuery from "jquery";



// Semeantic
import "./css/semantic.min.css";

// Components
import App from './App';

// Data
import { quotes } from "./data/quotes";

ReactDOM.render(
  <React.StrictMode>
    <App quotes={quotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);

