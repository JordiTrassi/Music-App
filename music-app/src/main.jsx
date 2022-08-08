import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

import { MusicApp } from './MusicApp';
import { Navbar } from './components';

// import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <MusicApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
