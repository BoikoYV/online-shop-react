import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import CardsList from '../CardsList/CardsList';
import styles from './App.module.css';
import modalStyles from '../Modal/Modal.module.css';

import { getCardsList } from '../api/api';

const App = () => {
    const modalWindows = [{
        id: 1,
        closeButton: true,
        header: 'Do you want to add this product to your cart?',
        text: 'This item will be available in the cart',
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
    }]

    const [modals, setModals] = useState(modalWindows);
    const [cardsList, setCardsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const fetchCardsList = () => {
        getCardsList()
            .then(cards => {
                console.log(cards);
                setCardsList(cards);
            })
            .catch(err => {
                console.error(err.message)
            })
            .finally(() => {
                setIsLoading(false);
            })

    }

    useEffect(() => {
        fetchCardsList();
    }, [])


    const createModalButtons = (id, text1, text2) => {
        return (
            <>
                <button onClick={() => { onClickHandler(id) }} className={`${modalStyles.btn} ${modalStyles.okBtn}`}>{text1}</button>
                <button onClick={() => { onClickHandler(id) }} className={`${modalStyles.btn} ${modalStyles.cancelBtn}`}>{text2}</button>
            </>
        )
    }

    const onClickHandler = (modalId) => {
        let currentModal;
        let restModal;
        modals.forEach((item) => {
            if (modalId === item.id) {
                currentModal = item;
            } else {
                restModal = item;
            }
        })
        setModals([restModal, { ...currentModal, isShown: !currentModal.isShown }])
    }

    const closeModalHandler = () => {
        let modalsClone = [];

        modals.forEach((item) => {
            let newItem = { ...item };
            newItem.isShown = false;
            modalsClone.push(newItem)
        })
        setModals(modalsClone);
    }

    const modalsArr = modals.map(({ id, closeButton, header, text, isShown, btn1, btn2 }) => {
        return (
            <Modal key={id}
                id={id}
                header={header}
                closeButton={closeButton}
                text={text}
                isShown={isShown}
                actions={createModalButtons(id, btn1, btn2)}
                closeModalHandler={() => { onClickHandler(id) }} />
        )
    })

    const isOverlay = modals.some((item) => {
        return item.isShown;
    })

    const classHide = !isOverlay ? modalStyles.hide : '';


    let content;
    if (isLoading) {
        content = (<p>Loading</p>);
    }
    else if (hasError) {
        content = (<div>Sorry, error</div>)
    } else {
        content = (<CardsList cards={cardsList} onClickHandler={onClickHandler} idModal={1} />);
    }



    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles.appInner}>
                    {/* <div className={styles.btnBox}>
                        <Button text="Open first modal" backgroundColor='#1e8b7a' onClickHandler={onClickHandler} idModal={1} />
                        <Button text="Open second modal" backgroundColor='#50b4e2' onClickHandler={onClickHandler} idModal={2} />
                    </div> */}
                    {modalsArr}
                    {content}
                    <div onClick={() => { closeModalHandler() }} className={`${modalStyles.overlay} ${classHide}`}></div>
                </div>
            </div>
        </div>
    );
};



export default App;