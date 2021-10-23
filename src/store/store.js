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
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools));
export default store;