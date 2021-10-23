export const favouritesReducer = ((state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITES':
            return [...state, action.payload];
        case 'REMOVE_FAVOURITES':
            return state.filter((articulNum) => articulNum !== action.payload);
        default:
            return state;
    }
})