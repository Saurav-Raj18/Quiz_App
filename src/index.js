import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextScoreFunc } from './ContextScore/ContextScore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextScoreFunc>
    <App />
    </ContextScoreFunc>
  </React.StrictMode>
);
