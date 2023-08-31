import './App.css';
// import the state hook function
// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RentalsPage from './components/RentalsPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/rentals" element={<RentalsPage/>} />
      <Route path="yeezy350bred" element={<ProductPage />} />
    </Routes>
  );
}

export default App;