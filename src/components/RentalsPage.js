
import SneakerList from "./SneakerList";
import NavBar from './NavBar';
import SearchBar from "./SearchBar";
import Footer from './Footer';

function RentalsPage() {

  return (
    <div>
      <div id="rental-body">
        <NavBar/>
        <SearchBar />
        <SneakerList/>
        <Footer/>
      </div>
    </div>
  )
}

export default RentalsPage;