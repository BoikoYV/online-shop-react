import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (articul) => {
    return {
        type: ADD_TO_CART,
        payload: articul
    }
}

export const removeFromCart = (articul) => {
    return {
        type: REMOVE_FROM_CART,
        payload: articul
    }
}