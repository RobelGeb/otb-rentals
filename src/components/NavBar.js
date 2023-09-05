import React, {useState} from 'react';
import './NavBar.css';
import sneaker from '../img/blue-jordan-1.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function NavBar(props) {

  const[showCart, setShowCart] = useState(false);
  const[cartContents, setCartContents] = useState("");


  return (
    <header>
      <div class="topnav">
        <Link id="home-link" to="/"><img id="sneaker-logo" src={sneaker} alt="sneaker logo"/></Link>
          <Link to="/cart" id="cart" onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}> 
            <div id="cart-total">
              <FontAwesomeIcon icon={faCartShopping} size="lg"/>
            </div>
            <div id="cart-items">
              {
                showCart && cartContents
              }
            </div>
          </Link>        
        <Link to="/support">SUPPORT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/rentals">RENTALS</Link>
      </div>
    </header>
  )
}

export default NavBar;