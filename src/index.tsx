import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NotFound from './NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
)