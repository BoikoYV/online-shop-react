import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { favouritesReducer } from './favourites/reducer';
import { cardsReducer } from './cards/reducer';


// const rootReducer = combineReducers({
//     // favourites: favouritesReducer,
//     cards: cardsReducer
// })
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args

const store = createStore(cardsReducer, compose(applyMiddleware(thunk), devTools));
export default store;