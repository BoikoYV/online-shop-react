import { AddToCartModal } from './AddToCartModal';
import { DeleteFromCartModal } from './DeleteFromCartModal';
import { ADD_TO_CART, DELETE_FROM_CART } from '../../store/modal/types';

const MODAL_COMPONENTS = {
    [ADD_TO_CART]: AddToCartModal,
    [DELETE_FROM_CART]: DeleteFromCartModal,
    /* other modals */
}

export const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) return null;
    console.log(modalProps);
    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
}

