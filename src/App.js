import './App.css';
//import the state hook function
// import React, { useState } from 'react';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;