import React from "react";
import './NavBar.css';

function Cart(props, show) {
    const shoes = props.cart.keys();
    const frequencies = props.cart.values();
    console.log(shoes + " " + frequencies);    

    return (
    <div class="cart">        
        {[...props.cart].map(([key, value]) => (
        <option key={key} value={key}>
            {key} x {value}
        </option>
        ))}
    </div>
    );
};

export default Cart;