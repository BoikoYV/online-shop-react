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
                isShown: false
            },
            {
                id: 2,
                closeButton: true,
                header: 'Do you want to save this file?',
                text: 'Your file is saved',
                isShown: false
            }
        ]
    }

    createModalButtons() {
        return (
            <>
                <button className={`${modalStyles.btn} ${modalStyles.okBtn}`}>Ok</button>
                <button className={`${modalStyles.btn} ${modalStyles.cancelBtn}`}>Cancel</button>
            </>
        )
    }

    onClickHandler = (id) => {
        console.log(id);
    }

    render() {
        const { modals } = this.state;
        const modalsArr = modals.map(({ id, closeButton, header, text, isShown }) => {
            return (

                <Modal key={id}
                    id={id}
                    header={header}
                    closeButton={closeButton}
                    text={text}
                    isShown={isShown}
                    actions={this.createModalButtons()} />
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
                <div className={`${modalStyles.overlay} ${modalStyles.modalBox} ${classHide}`}></div>
            </div>
        );
    }
}

export default App;