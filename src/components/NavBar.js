import React, {useState} from 'react';
import './NavBar.css';
import sneaker from '../img/blue-jordan-1.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart.js';

function NavBar(props) {

  const[showCart, setShowCart] = useState(false);

  function show() {
    if (props.cart.size !== 0) {
      setShowCart(true);
    }
  }

  function cover() {
    setShowCart(false);
  }

  return (
    <header>
      <div class="topnav">
        <Link id="home-link" to="/"><img id="sneaker-logo" src={sneaker} alt="sneaker logo"/></Link>
        <div id="cart" onMouseEnter={show} onMouseLeave={cover}>
          <Link to="/checkout">
            <FontAwesomeIcon icon={faCartShopping} size="lg"/>
          </Link>
          <div id="cart-items">
            { showCart && <Cart cart={props.cart}/> }
          </div>
        </div>
        <Link to="/support">SUPPORT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/rentals">RENTALS</Link>
      </div>
    </header>
  )
}

export default NavBar;