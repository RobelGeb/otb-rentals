import React, { useState } from 'react';
import './ProductPage.css';
//import ReactImageGallery from 'react-image-gallery';
//import 'react-image-gallery/styles/css/image-gallery.css';


function ProductCarousel (props) {

    function handleClick(index) {
        
        const slider = props.images[index];
        props.setSliderData(slider);
        console.log(slider);
    }
    return (
        <div id="slider">
            <img id="thumbnail" src={props.sliderData.thumbnail} height="400" alt="" />
            <div>
                {
                    props.images.map(
                        (data,i) => <img key={data.id} src={data.thumbnail} onClick={() => handleClick(i)} height="200" alt="" />
                    )
                }                
            </div>

        </div>
        // <ReactImageGallery 
        //     items={images} 
        //     showPlayButton={false}
        //     showFullscreenButton={false}
        // />
    );
}

export default ProductCarousel;