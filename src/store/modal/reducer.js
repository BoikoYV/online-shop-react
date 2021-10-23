const initialState = {
    modalType: null,
    modalProps: {},
    modalIsOpen: false,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps,
                modalIsOpen: true
            }
        case 'HIDE_MODAL':
            return { ...initialState }

        default:
            return state
    }
}