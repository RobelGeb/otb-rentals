import NavBar from './NavBar';
import SearchBar from "./SearchBar";
import Footer from './Footer';
import { useLocation } from "react-router-dom";

function SneakersPage(props) {

  const location = useLocation();

  return (
    <div>
      <div id="rental-body">
        <NavBar cart={props.cart}/>
        <SearchBar userInput={location.state}/>
        <Footer/>
      </div>
    </div>
  )
}

export default SneakersPage;