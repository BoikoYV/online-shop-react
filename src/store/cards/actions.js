import { getCardsList } from "../../api/getCardsList";
import { SET_CARDS, SET_LOADING, SET_ERROR } from './types';


export const setCards = cards => ({
    type: SET_CARDS,
    payload: cards
})

export const setIsLoading = bool => ({
    type: SET_LOADING,
    payload: bool
})

export const setIsError = bool => ({
    type: SET_ERROR,
    payload: bool
})


export const fetchCardsList = () => (dispatch, getState) => {
    dispatch(setIsLoading(true));

    getCardsList()
        .then((cards) => {
            dispatch(setCards(cards))
        })
        .catch(err => {
            dispatch(setIsError(true))
        })

}