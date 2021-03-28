import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GlobalStyles from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
