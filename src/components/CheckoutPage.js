import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import NavBar from './NavBar';
import './CheckoutPage.css';

const stripePromise = loadStripe('pk_test_51NoGsrJL9cid2s5PCSCemSsxt5OckOffz9pgTvcOVAEYskUO8Qf1T37bj04FRnWqMX6ow8Q58bu4pWNRxGBiQ5dB00qlzbrqJ0');

function CartPage(props) {

    const handleClick = async(event) => {
        event.preventDefault();
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1NoH85JL9cid2s5PWJGd8lNF', 
                quantity: 1
            }], 
            mode: 'payment',
            successUrl: 'https://www.bing.com',
            cancelUrl: 'https://www.google.com',
        });

        if (result.error) {
            console.log(result.error.message);
        }
    }
    return(
        <div id="checkout">
            <NavBar cart={props.cart}/>
            <button onClick={handleClick}>Checkout</button>


        </div>
    );
}

export default CartPage;