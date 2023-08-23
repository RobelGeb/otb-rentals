import './NavBar.css';
import sneaker from '../img/black-sneaker.png';

function NavBar() {
  return (
    <div>
       <header>
        <div class="topnav">
          <img id="sneaker-logo" src={sneaker} alt="sneaker logo"/>
          <a href="#support">SUPPORT</a>
          <a href="#about">ABOUT</a>
          <a href="#rentals">RENTALS</a>
        </div>
      </header>
    </div>
  )
}

export default NavBar;