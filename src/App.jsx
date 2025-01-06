// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Home';
import CartPage from './components/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='containter'>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
