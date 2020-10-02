import React from 'react'
import classes from './Subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../context/StateProvider';
import {getBasketTotal} from '../../context/Reducer';

function Subtotal() {
    const [{basket},] = useStateValue();

    return (
        <div className={classes.subtotal}>
            <CurrencyFormat 
                renderText={value => (
                    <div>
                        <p>
                            Subtotal ({basket.length}) items : <strong>{value}</strong>
                        </p>
                        <small className={classes.checkout__gift}>
                            <input className={classes.checkout__giftCheck} type="checkbox"/>This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className={classes.checkout__button}>Checkout</button>
        </div>
    )
}

export default Subtotal
