import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TextAnalyzer from './components/TextAnalyzer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextAnalyzer />
  </React.StrictMode>
);
