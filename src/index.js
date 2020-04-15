import React from 'react';
import ReactDOM from 'react-dom';
import RecetteProvider from './context/Provider'

import { BrowserRouter } from 'react-router-dom'

import App from './App';

ReactDOM.render(
  <RecetteProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecetteProvider>


, document.getElementById('root'));
