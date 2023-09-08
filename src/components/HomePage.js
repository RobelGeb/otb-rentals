import '../App.css';
import NavBar from './NavBar';

function HomePage(props) {
  return (
    <div>
      <NavBar cart={props.cart}/>
      <section id="home-page" class="centered">
        <div id="glow-text">Out The Box</div>
      </section>
    </div>
  );
}

export default HomePage;