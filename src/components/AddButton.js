import React from 'react';
import './ProductPage.css';

function AddButton(props) {

    const addToCart = function(event) {

        let cartMap = props.cart;
        
        //if there's already that shoe in the cart, add even more onto that based on how many times
        //the "add to cart" button was clicked. else, just add from 0.
        if (props.cart.has(props.shoeName)) {

            cartMap.set(props.shoeName, cartMap.get(props.shoeName) + 1);
        } else {
            cartMap.set(props.shoeName, 1);
        }
        //update the stuff in the cart with 
        //a key/value pair (shoe/quatity)
        props.setCart(cartMap);
        console.log(props.cart);
    }
    return (
        <div>
            <button id="add" onClick={addToCart}> + Add to cart + </button>
        </div>
    );
}

export default AddButton;