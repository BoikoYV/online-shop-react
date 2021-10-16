import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal/Modal';
import CardsList from '../components/CardsList/CardsList';
import styles from '../App/App.module.css';
import { getCardsList } from '../api/api';
import { getDataFromLs } from '../getDataFromLs'
import modalStyles from '../components/Modal/Modal.module.css';
import modalWindows from '../components/Modal/modals';
import createModalButtons from '../components/Modal/createModalButtons';

const Cards = () => {

    const [modals, setModals] = useState(modalWindows);
    const [cardsList, setCardsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currrentCardArticul, setCurrrentCardArticul] = useState(null);
    const [cardsInCart, setCardsInCart] = useState(getDataFromLs('cardsInCart'));
    const [cardsInFavorites, setCardsInFavorites] = useState(getDataFromLs('favouriteCards'));

    const fetchCardsList = () => {
        getCardsList()
            .then(cards => {
                setCardsList(cards);
            })
            .catch(err => {
                console.error(err.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    useEffect(() => {
        fetchCardsList();
    }, []);

    // Cart
    const addCardsToCartHandler = (articulName) => {
        if (!cardsInCart.includes(articulName)) {
            setCardsInCart([...cardsInCart, articulName]);
        }
        closeModalHandler();
    }

    // Modals
    const onClickHandler = (modalId, articul) => {
        setCurrrentCardArticul(articul);

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
                actions={createModalButtons(btn1, btn2, addCardsToCartHandler, closeModalHandler, currrentCardArticul)}
                closeModalHandler={() => { onClickHandler(id) }} />
        )
    })

    const isOverlay = modals.some((item) => {
        return item.isShown;
    })


    const classHide = !isOverlay ? modalStyles.hide : '';


    // Favourites
    const changeFavouriteHandler = (articul) => {
        if (cardsInFavorites.includes(articul)) {
            const favourites = cardsInFavorites.filter((articulNum) => articulNum !== articul)
            setCardsInFavorites(favourites);
        } else {
            setCardsInFavorites([...cardsInFavorites, articul]);
        };
    };


    let content;
    if (isLoading) {
        content = (<p>Loading</p>);
    }
    else if (hasError) {
        content = (<div>Sorry, error</div>)
    } else {

        content = (
            <CardsList cards={cardsList}
                onClickHandler={onClickHandler}
                idModal={1}
                changeFavouriteHandler={changeFavouriteHandler}
                favouritesCardsArr={cardsInFavorites} />
        )
    }

    // LocalStorage
    useEffect(() => {
        localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart));
    }, [cardsInCart]);

    useEffect(() => {
        localStorage.setItem('favouriteCards', JSON.stringify(cardsInFavorites));
    }, [cardsInFavorites]);

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles.appInner}>
                    {modalsArr}
                    {content}
                    <div onClick={() => { closeModalHandler() }} className={`${modalStyles.overlay} ${classHide}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Cards;