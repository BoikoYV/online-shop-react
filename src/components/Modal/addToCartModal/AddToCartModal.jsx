import Modal from '../basicModal/Modal';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const AddToCartModal = ({ actions, closeModalHandler, header, text, closeButton }) => {
    const modalIsShown = useSelector(({ modal }) => modal.addToCartModalIsOpen);

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

AddToCartModal.propTypes = {
    actions: PropTypes.node,
    closeModalHandler: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
}

AddToCartModal.defaultProps = {
    actions: null
}