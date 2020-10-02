import React from 'react'
import {useStateValue} from '../../context/StateProvider';
import classes from './Checkout.module.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket},] = useStateValue();

    let shoppingCart = null;
    if(basket?.length === 0){
        shoppingCart = (
            <div>
                <h1>You Shopping Cart is empty</h1>
                <p>You shopping basket is empty. Please click on "Add to basket" to Add
                    items in your cart.
                </p>
            </div>
        )
    } else {
    shoppingCart = (
        <div>
            <h2 className={classes.checkout__title}>You Shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                />
            ))}
        </div>
    )}

    let subtotal = null;
    if(basket?.length > 0){
        subtotal = (
            <div className={classes.checkout__right}>
                <Subtotal />
            </div>
        );
    }

    return (
        <div className={classes.checkout}>
            <div className={classes.checkout__left}>
                <img className={classes.checkout__adImage}
                    src="https://i1.wp.com/www.kouponingwithkatie.com/wp-content/uploads/2017/06/amazon-cash-banner.png?ssl=1"
                    alt="advertisement"/>
                {shoppingCart}
                
            </div>
            {subtotal}
        </div>
    )
}

export default Checkout
