import {ADD_FAVOURITES} from './types';

export const addToFavourites = (card) => {
    return {
        type: ADD_FAVOURITES,
        payload: card
    }
}