import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RentalsPage from './components/RentalsPage';
import ProductPage from './components/ProductPage';

function App() {
  
  const [cart, setCart] = useState(new Map());

  return (
      <Routes>  
          <Route path="/" element={<HomePage cart={cart} setCart={setCart}/>} />
          <Route path="/about" element={<AboutPage cart={cart} setCart={setCart}/>} />
          <Route path="/rentals" element={<RentalsPage cart={cart} setCart={setCart}/>} />
          <Route path="/sneaker" element={<ProductPage cart={cart} setCart={setCart}/>} />
      </Routes>
  );
}

export default App;