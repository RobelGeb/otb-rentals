import React, { useState } from 'react';
import './ProductPage.css';

function AddButton() {

    const [items, setItems] = useState(0);

    const addToCart = function(event) {
        setItems(items + 1);
        console.log(items);
    }

    return (
        <div>
            <button onClick={addToCart}> Add to cart </button>
        </div>

    );
}

export default AddButton;