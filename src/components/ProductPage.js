import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import SneakerItem from './SneakerItem';
import AddButton from './AddButton';
import './ProductPage.css';
import ProductCarousel from './ProductCarousel';
// import SearchBar from './SearchBar';

// import sneaker images from folder
import yeezy700 from '../img/sneakers/yeezy-700-waverunner.jpeg';
import yeezy350 from '../img/sneakers/yeezy-350-bred.jpeg';
import uncOw1 from '../img/sneakers/unc-ow-jordan-1.jpeg';
import SneakerList from './SneakerList';
import benJerry from '../img/sneakers/ben-jerry-dunks.jpeg';
import bred4 from '../img/sneakers/bred-4.jpeg';
import fire4 from '../img/sneakers/fire-red-4.jpeg';
import bred11 from '../img/sneakers/bred-11.jpeg';
import travis4 from '../img/sneakers/travis-4.jpeg';
import travisHighMocha from '../img/sneakers/travis-high-mocha.jpeg';
import travisLowMocha from '../img/sneakers/travis-low-mocha.jpeg';
import blackOwAf1 from '../img/sneakers/af1-ow-black.jpeg';
import mcaOwAf1 from '../img/sneakers/af1-ow-mca.jpeg';

function ProductPage () {

    let sneakersJsonObject = {
        'sneakers' : [{
          "id": 1,
          "name": "Adidas Yeezy Boost 700 Wave Runner (2017/2023)",
          "sneakerImage": yeezy700,
          "condition": "Lightly Worn",
          "price": "$100",
          "brand": "adidas"
        }, {
          "id": 2,
          "name": "Adidas Yeezy Boost 350 V2 Black Red (2017/2020)",
          "sneakerImage": yeezy350,
          "condition": "Lightly Worn",
          "price": "$100",
          "brand": "adidas"
        }, {
          "id": 3,
          "name": "Nike SB Dunk Low Ben & Jerry's Chunky Dunky",
          "sneakerImage": benJerry,
          "condition": "Lightly Worn",
          "price": "$250",
          "brand": "nike"
        }, {
          "id": 4,
          "name": "Jordan 4 Retro Bred (2019)",
          "sneakerImage": bred4,
          "condition": "Lightly Worn",
          "price": "$100",
          "brand": "jordan"
        }, {
          "id": 5,
          "name": "Jordan 4 Retro Fire Red (2020)",
          "sneakerImage": fire4,
          "condition": "Good",
          "price": "$80",
          "brand": "jordan"
        }, {
          "id": 6,
          "name": "Jordan 11 Retro Playoffs Bred (2019)",
          "sneakerImage": bred11,
          "condition": "Good",
          "price": "$80",
          "brand": "jordan"
        }, {
          "id": 7,
          "name": "Jordan 4 Retro Travis Scott Cactus Jack",
          "sneakerImage": travis4,
          "condition": "Good",
          "price": "$200",
          "brand": "jordan"
        }, {
          "id": 8,
          "name": "Jordan 1 Retro High OG SP Travis Scott Mocha",
          "sneakerImage": travisHighMocha,
          "condition": "Good",
          "price": "$250",
          "brand": "jordan"
        }, {
          "id": 9,
          "name": "Jordan 1 Retro Low OG SP Travis Scott Mocha",
          "sneakerImage": travisLowMocha,
          "condition": "Good",
          "price": "$250",
          "brand": "jordan"
        },  {
          "id": 10,
          "name": "Nike Air Force 1 Low Off-White Black White",
          "sneakerImage": blackOwAf1,
          "condition": "Lightly Worn",
          "price": "$200",
          "brand": "nike"
        },  {
          "id": 11,
          "name": "Nike Air Force 1 Low Off-White MCA University Blue",
          "sneakerImage": mcaOwAf1,
          "condition": "Lightly Worn",
          "price": "$225",
          "brand": "nike"
        },  {
          "id": 12,
          "name": "Jordan 1 Retro Low OG SP Travis Scott Mocha",
          "sneakerImage": uncOw1,
          "condition": "Lightly Worn",
          "price": "$300",
          "brand": "jordan"
        }]
      }
    
      

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
            {/* <SearchBar/> will go above the product page so users can search for other shoes*/}
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
            <SneakerList userResults={sneakersJsonObject.sneakers} />
            <Footer/>
        </div>
    );
}

export default ProductPage;