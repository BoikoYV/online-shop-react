import Modal from './Modal';
import { useSelector } from 'react-redux';


export const AddToCartModal = ({ actions, closeModalHandler }) => {
    const modalisShown = useSelector(({ modal }) => modal.modalIsOpen);

    return (
        <Modal
            header='Do you want to add this product to your cart?'
            closeButton={true}
            text='This item will be available in the cart'
            isShown={modalisShown}
            actions={actions}
            closeModalHandler={() => { closeModalHandler() }} />
    )
}
