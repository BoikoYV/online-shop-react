import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { favouritesReducer } from './favourites/reducer';
import { cardsReducer } from './cards/reducer';
import { modalReducer } from './modal/reducer';
import { currentArticulReducer } from './currentCardArticul/reducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    cards: cardsReducer,
    favourites: favouritesReducer,
    currrentCardArticul: currentArticulReducer,
})

const favoriteSyncMiddleware = store => next => action => {
    const result = next(action)
    if (['ADD_FAVOURITES', 'REMOVE_FAVOURITES'].includes(action.type)) {
        console.log('favorite');
        const { favourites } = store.getState()
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
    return result
}

let initialState = {};
const favouritesFromLS = localStorage.getItem('favourites')

if (favouritesFromLS) {
    try {
        initialState = { ...initialState, favourites: JSON.parse(favouritesFromLS) }
    } catch (err) {
        console.error(err);
    }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk, favoriteSyncMiddleware), devTools));
export default store;