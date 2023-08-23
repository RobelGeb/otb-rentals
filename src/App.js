import './App.css';
//import the state hook function
// import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <AboutPage/>
    </div>
  );
}

export default App;