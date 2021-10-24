const initialState = {
    currentArticul: null
}

export const currentArticulReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_ARTICUL':
            return {
                currentArticul: action.payload
            }

        default: {
            return state
        }
    }
}