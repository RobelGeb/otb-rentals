import './NavBar.css';
import sneaker from '../img/blue-jordan-1.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon icon={faCartShopping} size="lg" /> */}

function NavBar() {
  return (
    <header>
      <div class="topnav">
        <Link id="home-link" to="/"><img id="sneaker-logo" src={sneaker} alt="sneaker logo"/></Link>
        
        <Link to="/cart"> Items in cart </Link>
        <Link to="/support">SUPPORT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/rentals">RENTALS</Link>
      </div>
    </header>
  )
}

export default NavBar;