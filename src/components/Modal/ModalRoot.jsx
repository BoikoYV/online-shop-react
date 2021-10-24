import { AddToCartModal } from './addToCartModal/AddToCartModal';
import { DeleteFromCartModal } from './deleteFromCartModal/DeleteFromCartModal';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/modal/types';

const MODAL_COMPONENTS = {
    [ADD_TO_CART]: AddToCartModal,
    [REMOVE_FROM_CART]: DeleteFromCartModal,
    /* other modals */
}

export const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) return null;
    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
}

