import React, { useState, useEffect } from 'react';
import { getCardsList } from '../api/api';
import { getDataFromLs } from '../getDataFromLs';
import CardsList from '../components/CardsList/CardsList';
import Modal from '../components/Modal/Modal';
import modalStyles from '../components/Modal/Modal.module.css';
import createModalButtons from '../components/Modal/createModalButtons';
import styles from './Favourites.module.css';

const Favourites = props => {
    const [cardsList, setCardsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [cardsInFavorites, setCardsInFavorites] = useState(getDataFromLs('favouriteCards'));
    const [currrentCardArticul, setCurrrentCardArticul] = useState(null);
    const [cardsInCart, setCardsInCart] = useState(getDataFromLs('cardsInCart'));
    const [isModalOpen, setIsModalOpen] = useState(false);

    // LocalStorage
    useEffect(() => {
        localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart));
    }, [cardsInCart])

    useEffect(() => {
        localStorage.setItem('favouriteCards', JSON.stringify(cardsInFavorites));
    }, [cardsInFavorites]);

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
    }

    useEffect(() => {
        fetchCardsList();
    }, [])

    // Cart
    const addCardsToCartHandler = (articulName) => {
        if (!cardsInCart.includes(articulName)) {
            setCardsInCart([...cardsInCart, articulName]);
        }
        closeModalHandler();
    }
    
    // Modal
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
    } else if (hasError) {
        content = (<div>Sorry, error</div>)
    }
    else {
        if (cardsInFavorites.length < 1) {
            content = <p className={styles.noItemsTitle}>No items in favourites</p>;
        } else {
            const filteredCards = cardsList.cardsList.filter(({ articul }) => cardsInFavorites.includes(articul));
            content = (<CardsList
                cards={filteredCards}
                onClickHandler={onClickHandler}
                changeFavouriteHandler={changeFavouriteHandler}
                favouritesCardsArr={cardsInFavorites} />)
        }
    }

    return (
        <div className={styles.favoritesSection}>
            <div className={styles.container}>
                <h2 className={styles.favoritesTitle}>Favorites - {cardsInFavorites.length} items</h2>
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
    );
};


export default Favourites;