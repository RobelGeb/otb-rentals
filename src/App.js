import './App.css';
// import the state hook function
// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RentalsPage from './components/RentalsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path ="/rentals" element={<RentalsPage/>} />
    </Routes>
  );
}

export default App;