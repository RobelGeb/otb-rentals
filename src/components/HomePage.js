import '../App.css';
import NavBar from './NavBar';

function HomePage() {
  return (
    <div>
      <NavBar/>
      <section id="home-page" class="centered">
        <div id="glow-text">Out The Box</div>
      </section>
    </div>
  );
}

export default HomePage;