import React, { useState, useEffect } from 'react';
import styles from '../App/App.module.css';
import { getCardsList } from '../api/api';
import { getDataFromLs } from '../getDataFromLs';
import Modal from '../components/Modal/Modal';
import modalStyles from '../components/Modal/Modal.module.css';
import createModalButtons from '../components/Modal/createModalButtons';
import CardsList from '../components/CardsList/CardsList';

const Cards = () => {
    const [cardsList, setCardsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError] = useState(false);
    const [currrentCardArticul, setCurrrentCardArticul] = useState(null);
    const [cardsInCart, setCardsInCart] = useState(getDataFromLs('cardsInCart'));
    const [cardsInFavorites, setCardsInFavorites] = useState(getDataFromLs('favouriteCards'));
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    const onClickHandler = (articul) => {
        setCurrrentCardArticul(articul);
        setIsModalOpen(true);
    }

    const closeModalHandler = () => {
        setIsModalOpen(false);
    }

    const classHide = !isModalOpen ? modalStyles.hide : '';


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
            <CardsList cards={cardsList.cardsList}
                onClickHandler={onClickHandler}
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
                    <Modal
                        header='Do you want to add this product to your cart?'
                        closeButton={true}
                        text='This item will be available in the cart'
                        isShown={isModalOpen}
                        actions={createModalButtons('Ok', 'Cancel', addCardsToCartHandler, closeModalHandler, currrentCardArticul)}
                        closeModalHandler={() => { closeModalHandler() }} />
                    {content}
                    <div onClick={() => { closeModalHandler() }} className={`${modalStyles.overlay} ${classHide}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Cards;