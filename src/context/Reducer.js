import * as actionTypes from './actionTypes';

export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_BASKET:
            return{
                ...state,
                basket: [...state.basket, action.item]
            }

        case actionTypes.REMOVE_FROM_BASKET:
            console.log(action.id);
            let newCart = [...state.basket]
            const idx = state.basket.findIndex(item => item.id === action.item.id)
            if(idx >= 0){
                newCart.splice(idx, 1);
            } else {
                alert("No items to remove");
            }
            return{
                ...state,
                basket: newCart
            }

        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer;