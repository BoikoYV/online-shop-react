export const favouritesReducer = ((state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITES':
            return [...state, action.payload]
        default:
            return state;
    }
})