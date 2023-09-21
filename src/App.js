import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import HomePage from './components/HomePage';
import SupportPage from './components/SupportPage';
import AboutPage from './components/AboutPage';
import SneakersPage from './components/SneakersPage';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';

function App() {

  const [cart, setCart] = useState(new Map());

  return (
      <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart}/>} />
          <Route path="/support" element={<SupportPage/>} />
          <Route path="/about" element={<AboutPage cart={cart} setCart={setCart}/>} />
          <Route path="/sneakers" element={<SneakersPage cart={cart} setCart={setCart}/>} />
          <Route path="/shoe" element={<ProductPage cart={cart} setCart={setCart}/>} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart}/>} />
      </Routes>
  );
}

export default App;