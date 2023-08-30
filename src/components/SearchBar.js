import '../App.css';
function SearchBar() {
  return (
    <div id="search-bar-container">
      <input id="search-bar-input" placeholder="Search sneaker here..."/>
      <button id="search-btn">Search</button>
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