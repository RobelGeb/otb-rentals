import React, {useState} from 'react';
import './NavBar.css';
import sneaker from '../img/blue-jordan-1.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
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
      <nav>
        <ul className='nav-bar'>
          <li id='home-link'><Link to="/"><img id="sneaker-logo" src={sneaker} alt="sneaker logo"/></Link></li>
          <span className='menu'>
            <li><Link to="/sneakers">Sneakers</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li>
              <div id="cart" onMouseEnter={show} onMouseLeave={cover}>
                <Link to="/checkout">
                  <FontAwesomeIcon icon={faBagShopping} size='xl'/>
                </Link>
                <div id="cart-items">
                  { showCart && <Cart cart={props.cart}/> }
                </div>
              </div>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;