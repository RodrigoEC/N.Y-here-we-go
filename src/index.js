import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemesProvider from './context/theme';
import GlobalStyles from './Global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemesProvider>
    <GlobalStyles />
    <App />
  </ThemesProvider>
);
