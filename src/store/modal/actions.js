import { SHOW_MODAL, HIDE_MODAL } from './types'

export const setModalShow = ({ modalType, modalProps }) => ({
    type: SHOW_MODAL,
    modalType: modalType,
    modalProps: {
        ...modalProps
    }
})

export const setModalClose = ({ modalType, modalProps }) => ({
    type: HIDE_MODAL,
    modalType: modalType,
    modalProps: {
        ...modalProps
    }
})
