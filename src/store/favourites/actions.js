import { ADD_FAVOURITES, REMOVE_FAVOURITES } from './types';

export const addToFavourites = (articul) => {
    return {
        type: ADD_FAVOURITES,
        payload: articul
    }
}

export const removeFavourites = (articul) => {
    return {
        type: REMOVE_FAVOURITES,
        payload: articul
    }
}