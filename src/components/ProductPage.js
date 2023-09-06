import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import AddButton from './AddButton';
import './ProductPage.css';
import ProductCarousel from './ProductCarousel';
import SearchBar from './SearchBar';
import Sneakers from '../data.json';

import {useLocation} from 'react-router-dom';


// import yeezy350pics 
import yeezy350side from '../img/sneakers/yeezy350/yeezy350bred_side.png';
import yeezy350rear from '../img/sneakers/yeezy350/yeezy350bred_rear.png';

function ProductPage (props) {


    // var mage = JSON.parse(Sneakers);
    // console.log(JSON.parse(Sneakers));


    const result = JSON.stringify(Sneakers);

    //console.log(JSON.parse(result));

    const parse_result = JSON.parse(result);
    const imgurl = parse_result[0].sneakerImage;

    // const sneakmap = new Map(Object.entries(JSON.parse(Sneakers)));
    // console.log(sneakmap);

    const location = useLocation()


    console.log(location.state.name);
    console.log(location.state.image);
    console.log(location.state.price);
    console.log(location.state);
    const images = [
        {
          id: 0,
          name: "yeezy350",
          original: location.state.image,
          thumbnail: location.state.image,
          quantity: 0
        },
        {
          id: 1,
          name: "yeezy700",
          original: location.state.image,
          thumbnail: location.state.image,
          quantity: 0
        },
        {
          id: 2,
          name: "uncOw1",
          original: location.state.image,
          thumbnail: location.state.image,
          quantity: 0
        },
    ];
    
    
    const yeezy350pics = [
        {
            id: 0,
            thumbnail: imgurl,
            name: 'yeezy350'
        },
        {
            id: 1,
            thumbnail: imgurl,
            name: 'yeezy350'
        },
        {
            id: 2,
            thumbnail: imgurl,
            name: 'yeezy350'
        }
    ];

    //which image is currently the thumbnail
    const[sliderData, setSliderData] = useState(images[0]);

    return (
        <div id="product">
            <NavBar cart={props.cart}/>
            <SearchBar productData={'product'} />
            <div>
                <h1>{location.state.name}</h1>
                {location.state.price}
            </div>
            <div>
                <ProductCarousel 
                    images={images}
                    sliderData={sliderData}
                    setSliderData={setSliderData} />
                <div>
                    <AddButton
                        cart={props.cart}
                        setCart={props.setCart}
                        shoeName={location.state.name}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage;