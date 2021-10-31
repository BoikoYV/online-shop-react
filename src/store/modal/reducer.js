const initialState = {
    modalType: null,
    modalProps: {
        closeButton: true,
        header: null,
        text: null
    },
    addToCartModalIsOpen: false,
    removeFromCartModalIsOpen: false,
    checkoutModalIsOpen: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ADD_TO_CART_MODAL':
            return {
                modalType: action.modalType,
                modalProps: { ...initialState.modalProps, ...action.payload },
                addToCartModalIsOpen: true,
            }
        case 'SHOW_REMOVE_FROM_CART_MODAL':
            return {
                modalType: action.modalType,
                modalProps: { ...initialState.modalProps, ...action.payload },
                removeFromCartModalIsOpen: true,
            }
        case 'SHOW_CHECKOUT_MODAL':
            return {
                modalType: action.modalType,
                modalProps: { ...initialState.modalProps, ...action.payload },
                checkoutModalIsOpen: true,
            }
        case 'HIDE_MODAL':
            return { ...initialState }

        default:
            return state
    }
}