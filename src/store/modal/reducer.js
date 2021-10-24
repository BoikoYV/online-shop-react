const initialState = {
    modalType: null,
    modalProps: {
        closeButton: true,
        header: null,
        text: null
    },
    modalIsOpen: false,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: { ...initialState.modalProps, ...action.payload },
                modalIsOpen: true
            }
        case 'HIDE_MODAL':
            return { ...initialState }

        default:
            return state
    }
}