export const cartReducer = ((state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const isInCart = state.includes(action.payload.currentArticul);
            return isInCart ? [...state] : [...state, action.payload.currentArticul];
        case 'REMOVE_FROM_CART':
            return state.filter((articul) => articul !== action.payload)
        default:
            return state;
    }
})
