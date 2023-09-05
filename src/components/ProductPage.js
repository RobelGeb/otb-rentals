import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import AddButton from './AddButton';
import './ProductPage.css';
import ProductCarousel from './ProductCarousel';
import SearchBar from './SearchBar';

// import sneaker images from folder
import yeezy700 from '../img/sneakers/yeezy-700-waverunner.jpeg';
import yeezy350 from '../img/sneakers/yeezy-350-bred.jpeg';
import uncOw1 from '../img/sneakers/unc-ow-jordan-1.jpeg';

function ProductPage () {

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

    //counts how many items are added to the cart at one time
    const [items, setItems] = useState(0);
    //items in the cart w/ their frequencies
    const [shoeNames, setShoeNames] = useState(new Map());
    //which image is currently the thumbnail
    const[sliderData, setSliderData] = useState(images[0]);

    return (
        <div id="product">
            <NavBar shoeNames={shoeNames}/>
            <SearchBar productData={'product'} />
            <div>
                <ProductCarousel sliderData={sliderData} setSliderData={setSliderData} images={images}/>
                <div>
                    <AddButton
                        items={items}
                        setItems={setItems}
                        shoeNames={shoeNames}
                        setShoeNames={setShoeNames}
                        sliderData={sliderData}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage;