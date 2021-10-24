const initialState = {
    cards:[], 
    isLoading: false,
    hasError: false,
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                isLoading: false,
                cards: [...action.payload]
            }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'SET_ERROR': {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            }
        }
        default: {
            return state
        }
    }
}