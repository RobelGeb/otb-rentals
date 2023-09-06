import React from 'react';
import './ProductPage.css';

function AddButton(props) {

    // const addToCart = function(event) {
    //     props.setItems(props.items + 1);
    //     console.log(props.items);
    //     let cartMap = props.shoeNames;
        
    //     //if there's already that shoe in the cart, add even more onto that based on how many times
    //     //the "add to cart" button was clicked. else, just add from 0.
    //     if (props.shoeNames.has(props.sliderData.original)) {
    //         cartMap.set(props.shoeNames, cartMap.get(props.sliderData.name) + props.items);
    //     } else {
    //         cartMap.set(props.sliderData.name, props.items);
    //     }
    //     //update the stuff in the cart with 
    //     //a key/value pair (shoe/quatity)
    //     props.setShoeNames(cartMap);
    //     console.log(props.shoeNames);
    // }
    const addToCart = function(event) {
        //props.setItems(props.items + 1);
        //console.log(props.items);
        let cartMap = props.shoeNames;
        
        //if there's already that shoe in the cart, add even more onto that based on how many times
        //the "add to cart" button was clicked. else, just add from 0.
        if (props.shoeNames.has(props.shoeName)) {

            cartMap.set(props.shoeName, cartMap.get(props.shoeName) + 1);
        } else {
            cartMap.set(props.shoeName, 1);
        }
        //update the stuff in the cart with 
        //a key/value pair (shoe/quatity)
        props.setShoeNames(cartMap);
        console.log(props.shoeNames);
    }
    return (
        <div>
            <button id="add" onClick={addToCart}> + Add to cart + </button>
        </div>
    );
}

export default AddButton;