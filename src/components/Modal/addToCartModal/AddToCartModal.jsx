import Modal from '../basicModal/Modal';
import { useSelector } from 'react-redux';

export const AddToCartModal = ({ actions, closeModalHandler, header, text, closeButton }) => {
    const modalIsShown = useSelector(({ modal }) => modal.modalIsOpen);

    return (
        <Modal
            header={header}
            closeButton={closeButton}
            text={text}
            isShown={modalIsShown}
            actions={actions}
            closeModalHandler={() => { closeModalHandler() }} />
    )
}
