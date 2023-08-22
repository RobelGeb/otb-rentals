import './NavBar.css';

function NavBar() {
  return (
    <div>
       <header>
        <div class="topnav">
          <a class="active" href="#home">HOME</a>
          <a href="#rentals">RENTALS</a>
          <a href="#about">ABOUT</a>
          <a href="#support">SUPPORT</a>
        </div>
      </header>
    </div>
  )
}

export default NavBar;