import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStiles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
