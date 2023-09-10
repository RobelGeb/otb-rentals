//import the state hook function
import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import SneakerList from './SneakerList';

// import json sneaker data
import Sneakers from '../data.json';

//import fontawesome search icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar(props) {

  let dataObject = Sneakers;

  if(props.userInput !== null && props.userInput !== undefined) {
    dataObject = props.userInput;
  }

  let [userInteraction, setResults] = useState(dataObject);
  const navigate = useNavigate();

  if(props.productData === 'product') {
    userInteraction = [];
  }

  const callbackKeyDown = (event) => {
    if(event.key === "Enter") {

      const inputResults = dataObject.filter((kicks) => {
        let sneakerName = kicks.name.toLowerCase();
        let userInput = event.target.value.toLowerCase();
        if(sneakerName.includes(userInput))  {
          return true;
        } else {
          return false;
        }
      })

      setResults(inputResults); // set, update -> in this case "input" on 'Enter' key

      // TODO: Need to fix, show results when navigating back to rental page -> not updating state before we navigate
      if(props.productData === 'product') {
        navigate("../rentals", {state: inputResults});
      }
    }
  }

  const callbackSearch = () => {

    const searchResults = dataObject.filter((kicks) => {
      let sneakerName = kicks.name.toLowerCase();
      let searchInput = id('search-bar-input').value.toLowerCase(); // "change" stores input field value
      if(sneakerName.includes(searchInput)) {
        return true
      } else {
        return false;
      }
    });

    setResults(searchResults); // set, update -> in this case "search"

    // TODO: Need to fix, show results when navigating back to rental page
    if(props.productData === 'product') {
      navigate("../rentals", {state: searchResults});
    }
  }

  const callbackSelect = (event) => {

    const selectResults = dataObject.filter((kicks) => {
      let selectedValue = event.target.value;
      if(selectedValue === "all" || kicks.brand === selectedValue) {
        return true;
      } else {
        return false;
      }
    });

    setResults(selectResults); // set, update -> in this case "select"

    // TODO: Need to fix, show results when navigating back to rental page
    if(props.productData === 'product') {
      navigate("../rentals", {state: selectResults});
    }
  }

  /**
   * Finds the element with the specified ID attribute
   *
   * @param {string} id element ID
   * @returns {HTMLElement} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  return (
    <div>
      <div id="search-bar-container">
        <input id="search-bar-input" onKeyDown={callbackKeyDown} placeholder="Search sneaker here..."/>
        <button id="search-btn" onClick={callbackSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <select id="filter" onChange={callbackSelect}>
          <option value="all">Select a type</option>
          <option value="nike">Nike</option>
          <option value="jordan">Jordan</option>
          <option value="adidas">Adidas</option>
        </select>
      </div>

      <SneakerList originalResults={Sneakers} userResults={userInteraction} />
    </div>
  )
}

export default SearchBar;