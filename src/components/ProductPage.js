import yeezy350 from '../img/sneakers/yeezy-350-bred.jpeg';
import Footer from './Footer';
import NavBar from './NavBar';
import SneakerItem from './SneakerItem';
import AddButton from './AddButton';
import './ProductPage.css';

function ProductPage () {

    return (
        <div id="product">
            <NavBar/>
            <div>
                <SneakerItem name="Adidas Yeezy Boost 350 V2 Black Red (2017/2020)" sneakerImage={yeezy350} condition="Lightly Worn" price="$100"/>
                <AddButton/>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage;