export const cartReducer = ((state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const isInCart = state.some(({ id }) => {
                return id === action.payload.currentArticul ? true : false;
            })
            return isInCart ? [...state] : [...state, { id: action.payload.currentArticul, count: 1 }]
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload);
        case 'CHECKOUT_ORDER':
            console.log(state);
            return [];

        case 'INCREASE_PRODUCT_QUANTITY':
            return state.map((item) => {
                return item.id === action.payload ?
                    { id: item.id, count: item.count += 1 } :
                    item;
            })
        case 'DECREASE_PRODUCT_QUANTITY':
            return state.map((item) => {
                if (item.count === 1) return item;
                return item.id === action.payload ?
                    { id: item.id, count: item.count -= 1 } :
                    item;
            })
        default:
            return state

    }
})

export const discountReducer = ((state = [], action) => {
    switch (action.type) {
        case 'ADD_DISCOUNT':
            return action.payload;
        default:
            return state
    }
})