import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'

const Modal = ({ isShown, header, text, actions, closeButton, closeModalHandler, id }) => {
    return (
        <div className={`${styles.modalBox} ${isShown ? '' : styles.hide}`}>
            <div className={styles.header}>
                <h2 className={styles.headerTitle}>{header}</h2>
                <button onClick={() => { closeModalHandler(id) }} className={closeButton ? styles.closeBtn : ''}></button>
            </div>
            <p className={styles.text}>{text}</p>
            <div className={styles.btnBox}>
                {actions}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isShown: PropTypes.bool,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.node.isRequired,
    closeButton: PropTypes.bool,
    closeModalHandler: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired

};

export default Modal;