import React from 'react'
import classes from './Product.module.css';
import {useStateValue} from '../../context/StateProvider';
import * as actionTypes from '../../context/actionTypes';

function Product(props) {

    const [, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
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
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p>{props.title}</p>
                <p className={classes.product__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={classes.product__rating}>
                    {
                        Array(props.rating)
                        .fill()
                        .map((_, id) => (
                            <p id={Math.random()}>★</p>
                        ))
                    }
                </div>
                <img src={props.image} alt="logo"
                className={classes.product__image}/>
                <button onClick={addToBasket} className={classes.product__addButton}>Add to Basket</button>
            </div>
            
        </div>
    )
}

export default Product
