import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { favouritesReducer } from './favourites/reducer';
import { cartReducer } from './cart/reducer';
import { cardsReducer } from './cards/reducer';
import { modalReducer } from './modal/reducer';
import { currentArticulReducer } from './currentCardArticul/reducer';
import { discountReducer } from './cart/reducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    cards: cardsReducer,
    favourites: favouritesReducer,
    cardsInCart: cartReducer,
    currrentCardArticul: currentArticulReducer,
    discount: discountReducer,
})

const syncMiddleware = store => next => action => {
    const result = next(action)
    if (['ADD_FAVOURITES', 'REMOVE_FAVOURITES'].includes(action.type)) {
        const { favourites } = store.getState();
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
    if (['ADD_TO_CART', 'REMOVE_FROM_CART', 'DECREASE_PRODUCT_QUANTITY', 'INCREASE_PRODUCT_QUANTITY'].includes(action.type)) {
        const { cardsInCart } = store.getState();
        localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart))
    }
    if (['ADD_DISCOUNT'].includes(action.type)) {
        const { discount } = store.getState();
        localStorage.setItem('discount', JSON.stringify(discount))
    }
    return result
}

let initialState = {};
const favouritesFromLS = localStorage.getItem('favourites');
const cardsInCartFromLS = localStorage.getItem('cardsInCart');
const discountFromLS = localStorage.getItem('discount');

if (favouritesFromLS) {
    try {
        initialState = { ...initialState, favourites: JSON.parse(favouritesFromLS) }
    } catch (err) {
        console.error(err);
    }
}
if (discountFromLS) {
    try {
        initialState = { ...initialState, discount: JSON.parse(discountFromLS) }
    } catch (err) {
        console.error(err);
    }
}

if (cardsInCartFromLS) {
    try {
        initialState = { ...initialState, cardsInCart: JSON.parse(cardsInCartFromLS) }
    } catch (err) {
        console.error(err);
    }
}




const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk, syncMiddleware), devTools));
export default store;