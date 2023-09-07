import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Cart(props, show) {
    const shoes = props.cart.keys();
    const frequencies = props.cart.values();
    console.log(shoes + " " + frequencies);
    //console.log(...props.cart.values());
    // const cartContent = props.cart.map(item, freq => 
    //     <ul>
    //         <li>{item + "x" + freq}</li>
    //     </ul>
    // );

    

    return (
    <div class="cart">        
        {/* <p>{cartContent}</p> */}
        {[...props.cart].map(([key, value]) => (
        <option key={key} value={key}>
            {key} x {value}
        </option>
        ))}
    </div>
    );
};

export default Cart;