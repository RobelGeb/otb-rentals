
import bp from '../img/bryan-phan.jpg';
import rg from '../img/robel-gebremichael.jpg';

import './AboutPage.css';
import NavBar from './NavBar';
import Footer from './Footer';

function AboutPage() {
  return (
    <div>
      <NavBar/>
      <section id="about-page">

        <div id="mission-description">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum
          </p>
        </div>

        <div id="team-description">
          <h2>Meet Our Team</h2>

          <div id="team-container">

            <div class="team-member-description">
              <h3>Bryan Phan (CEO), Software Engineer</h3>
              <img id="bp-image" src={bp} alt="Bryan Phan"/>
              <p>
                Recent University of Washington graduate (2023), received a degree in Informatics.
              </p>
            </div>

            <div class="team-member-description">
              <h3>Robel Gebremichael (CEO), Software Engineer</h3>
              <img id="rg-image" src={rg} alt="Robel Gebremichael"/>
              <p>
                Recent University of Washington graduate (2023), received a degree in Human Centered Design (HCI).
              </p>
            </div>

          </div>

        </div>
        <Footer/>
      </section>
    </div>
  );
}

export default AboutPage;