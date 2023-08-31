import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div id="search-bar-container">
      <input id="search-bar-input" placeholder="Search sneaker here..."/>
      <button id="search-btn"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
      <select id="filter">
        <option value="all">Select a type</option>
        <option value="nike">Nike</option>
        <option value="jordan">Jordan</option>
        <option value="adidas">Adidas</option>
      </select>
    </div>
  )
}

export default SearchBar;