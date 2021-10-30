import { AddToCartModal } from './addToCartModal/AddToCartModal';
import { DeleteFromCartModal } from './deleteFromCartModal/DeleteFromCartModal';
import { OrderModal } from './orderModal/OrderModal';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/modal/types';
import {CHECKOUT_ORDER} from '../../store/cart/types'
const MODAL_COMPONENTS = {
    [ADD_TO_CART]: AddToCartModal,
    [REMOVE_FROM_CART]: DeleteFromCartModal,
    [CHECKOUT_ORDER]: OrderModal,
    /* other modals */
}

export const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) return null;
    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
}

