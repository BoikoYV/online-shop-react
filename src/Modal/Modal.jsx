import React, { Component } from 'react';
import styles from './Modal.module.css'

class Modal extends Component {

    render() {
        const { isShown } = this.props;

        const { header, text, actions, closeButton, closeModalHandler, id } = this.props;
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
    }
}

export default Modal;