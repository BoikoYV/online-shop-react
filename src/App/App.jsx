import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './App.module.css';
import modalStyles from '../Modal/Modal.module.css';

class App extends Component {
    state = {
        modals: [
            {
                id: 1,
                closeButton: true,
                header: 'Do you want to delete this file?',
                text: 'Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?',
                isShown: false,
                btn1: 'Ok',
                btn2: 'Cancel'
            },
            {
                id: 2,
                closeButton: true,
                header: 'Do you want to save this file?',
                text: 'Your file will be saved',
                isShown: false,
                btn1: 'Save',
                btn2: 'Delete'
            }
        ]
    }

    createModalButtons(id, text1, text2) {
        return (
            <>
                <button onClick={() => { this.onClickHandler(id) }} className={`${modalStyles.btn} ${modalStyles.okBtn}`}>{text1}</button>
                <button onClick={() => { this.onClickHandler(id) }} className={`${modalStyles.btn} ${modalStyles.cancelBtn}`}>{text2}</button>
            </>
        )
    }

    onClickHandler = (modalId) => {

        const { modals } = this.state;
        let currentModal;
        let restModal;

        modals.forEach((item) => {
            if (modalId === item.id) {
                currentModal = item;
            } else {
                restModal = item;
            }
        })

        this.setState(
            { modals: [restModal, { ...currentModal, isShown: !currentModal.isShown }] }
        )
    }

    closeModalHandler = () => {
        const { modals } = this.state;
        let modalsClone = [];

        modals.forEach((item) => {
            let newItem = { ...item };
            newItem.isShown = false;
            modalsClone.push(newItem)
        })

        this.setState((state) => {
            return { modals: modalsClone }
        });
    }

    render() {
        const { modals } = this.state;
        const modalsArr = modals.map(({ id, closeButton, header, text, isShown, btn1, btn2 }) => {
            return (

                <Modal key={id}
                    id={id}
                    header={header}
                    closeButton={closeButton}
                    text={text}
                    isShown={isShown}
                    actions={this.createModalButtons(id, btn1, btn2)}
                    closeModalHandler={() => { this.onClickHandler(id) }} />
            )
        })

        const isOverlay = modals.some((item) => {
            return item.isShown;
        })

        const classHide = !isOverlay ? modalStyles.hide : '';

        return (
            <div className={styles.app}>
                <div className={styles.btnBox}>
                    <Button text="Open first modal" backgroundColor='#1e8b7a' onClickHandler={this.onClickHandler} idModal={1} />
                    <Button text="Open second modal" backgroundColor='#50b4e2' onClickHandler={this.onClickHandler} idModal={2} />
                </div>
                {modalsArr}
                <div onClick={() => { this.closeModalHandler() }} className={`${modalStyles.overlay} ${modalStyles.modalBox} ${classHide}`}></div>
            </div>
        );
    }
}

export default App;