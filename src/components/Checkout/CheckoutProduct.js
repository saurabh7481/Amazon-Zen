import React from 'react'
import classes from './CheckoutProduct.module.css';
import {useStateValue} from '../../context/StateProvider';
import * as actionTypes from '../../context/actionTypes';

function CheckoutProduct(props) {
    const [, dispatch] = useStateValue()

    const removeFromBasket = () => {
        console.log(props.id);
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                rating: props.rating,
                price: props.price
            }
        })
    }

    return (
        <div className={classes.checkoutProduct}>
            <img src={props.image} 
            className={classes.checkoutProduct__image} alt="logo"/>
            <div className={classes.checkoutProduct__info}>
                <p className={classes.checkoutProduct__title}>
                    {props.title}
                </p>
                <p className={classes.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={classes.checkoutProduct__rating}>
                    {
                        Array(props.rating)
                        .fill()
                        .map((_) => (
                            <p>★</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket} className={classes.checkoutProduct__removeButton}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
