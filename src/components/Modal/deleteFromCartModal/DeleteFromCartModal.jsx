import Modal from '../basicModal/Modal';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const DeleteFromCartModal = ({ actions, closeModalHandler, header, text, closeButton }) => {
    const modalIsShown = useSelector(({ modal }) => modal.removeFromCartModalIsOpen);

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

DeleteFromCartModal.propTypes = {
    actions: PropTypes.node,
    closeModalHandler: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
}

DeleteFromCartModal.defaultProps = {
    actions: null
}