
import SneakerList from "./SneakerList";
import NavBar from './NavBar';
import SearchBar from "./SearchBar";
import Footer from './Footer';

function RentalsPage(props) {

  return (
    <div>
      <div id="rental-body">
        <NavBar cart={props.cart}/>
        <SearchBar />
        <SneakerList/>
        <Footer/>
      </div>
    </div>
  )
}

export default RentalsPage;