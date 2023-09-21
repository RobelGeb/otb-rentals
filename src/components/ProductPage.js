import Footer from './Footer';
import NavBar from './NavBar';
import AddButton from './AddButton';
import SearchBar from './SearchBar';
import './ProductPage.css';

import {useLocation} from 'react-router-dom';
function ProductPage (props) {
    const location = useLocation()
    return (
        <div id="product">
            <NavBar cart={props.cart}/>
            <SearchBar productData={'product'} />
            <div id="shoe-detail-card">
                <h2>{location.state.name}</h2>
                <img src={location.state.image} alt="sneaker"></img>
                {location.state.price}
            </div>
            <div>
                    <AddButton
                        cart={props.cart}
                        setCart={props.setCart}
                        shoeName={location.state.name}
                        shoePrice={location.state.price}
                    />
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage;