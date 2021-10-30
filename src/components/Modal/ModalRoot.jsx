import { AddToCartModal } from './addToCartModal/AddToCartModal';
import { DeleteFromCartModal } from './deleteFromCartModal/DeleteFromCartModal';
import { OrderModal } from './orderModal/OrderModal';
import { SHOW_ADD_TO_CART_MODAL, SHOW_REMOVE_FROM_CART_MODAL, SHOW_CHECKOUT_MODAL } from '../../store/modal/types';

const MODAL_COMPONENTS = {
    [SHOW_ADD_TO_CART_MODAL]: AddToCartModal,
    [SHOW_REMOVE_FROM_CART_MODAL]: DeleteFromCartModal,
    [SHOW_CHECKOUT_MODAL]: OrderModal,
}

export const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) return null;
    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
}