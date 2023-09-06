import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import AddButton from './AddButton';
import './ProductPage.css';
import ProductCarousel from './ProductCarousel';
import SearchBar from './SearchBar';

// import yeezy350pics
import yeezy350side from '../img/sneakers/yeezy350/yeezy350bred_side.png';
import yeezy350rear from '../img/sneakers/yeezy350/yeezy350bred_rear.png'

function ProductPage (props) {


    const images = [
        {
          id: 0,
          name: "yeezy350",
          original: yeezy350,
          thumbnail: yeezy350,
          quantity: 0
        },
        {
          id: 1,
          name: "yeezy700",
          original: yeezy700,
          thumbnail: yeezy700,
          quantity: 0
        },
        {
          id: 2,
          name: "uncOw1",
          original: uncOw1,
          thumbnail: uncOw1,
          quantity: 0
        },
    ];

    const yeezy350pics = [
        {
            id: 0,
            thumbnail: yeezy350,
            name: 'yeezy350'
        },
        {
            id: 1,
            thumbnail: yeezy350side,
            name: 'yeezy350'
        },
        {
            id: 2,
            thumbnail: yeezy350rear,
            name: 'yeezy350'
        }
    ];

    //which image is currently the thumbnail
    const[sliderData, setSliderData] = useState(yeezy350pics[0]);

    return (
        <div id="product">
            <NavBar cart={props.cart}/>
            <SearchBar productData={'product'} />
            <div>
                <div>
                    <AddButton
                        cart={props.cart}
                        setCart={props.setCart}
                        shoeName={yeezy350pics[0].name}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage;