import React, { useState } from 'react';
import yeezy350 from '../img/sneakers/yeezy-350-bred.jpeg';
import Footer from './Footer';
import NavBar from './NavBar';
import SneakerItem from './SneakerItem';
// import AddButton from './AddButton';
import './ProductPage.css';
// import SearchBar from './SearchBar';

function ProductPage () {
    const [items, setItems] = useState(0);

    const addToCart = function(event) {
        setItems(items + 1);
        console.log(items);
    }
    
    return (
        <div id="product">
            <NavBar cartItems={items}/>
            {/* <SearchBar/> */}
            <div>
                <SneakerItem name="Adidas Yeezy Boost 350 V2 Black Red (2017/2020)" sneakerImage={yeezy350} condition="Lightly Worn" price="$100"/>
                <div>
                    <button onClick={addToCart}> Add to cart </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage;