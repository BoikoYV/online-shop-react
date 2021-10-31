import { SHOW_ADD_TO_CART_MODAL, SHOW_REMOVE_FROM_CART_MODAL, SHOW_CHECKOUT_MODAL, HIDE_MODAL } from './types'

export const setAddToCartModalShow = ({ modalType, modalProps }) => ({
    type: SHOW_ADD_TO_CART_MODAL,
    modalType: modalType,
    modalProps: {
        ...modalProps
    }
})
export const setRemoveFromCartModalShow = ({ modalType, modalProps }) => ({
    type: SHOW_REMOVE_FROM_CART_MODAL,
    modalType: modalType,
    modalProps: {
        ...modalProps
    }
})

export const setCheckoutModalShow = ({ modalType, modalProps }) => ({
    type: SHOW_CHECKOUT_MODAL,
    modalType: modalType,
    modalProps: {
        ...modalProps
    }
})

export const setModalClose = ({ modalType }) => ({
    type: HIDE_MODAL,
    modalType: modalType
})
