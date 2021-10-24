import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../../components/CardsList/CardsList';
import createModalButtons from '../../components/Modal/basicModal/createModalButtons';
import styles from './Favourites.module.css';
import { fetchCardsList } from '../../store/cards/actions'
import { addToCart } from '../../store/cart/actions';
import { ADD_TO_CART } from '../../store/modal/types';
import { setModalShow, setModalClose } from '../../store/modal/actions';
import { setCurrentArticul } from '../../store/currentCardArticul/actions';
import { ModalRoot } from '../../components/Modal/ModalRoot';
import { addToFavourites, removeFavourites } from '../../store/favourites/actions';
import Loader from '../../components/Loader/Loader';

const Favourites = () => {
    const isLoading = useSelector(({ cards }) => cards.isLoading);
    const cardsList = useSelector(({ cards }) => cards.cards);
    const currrentCardArticul = useSelector(({ currrentCardArticul }) => currrentCardArticul);
    const cardsInFavorites = useSelector(({ favourites }) => favourites);
    const hasError = useSelector(({ hasError }) => hasError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCardsList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Cart
    const addCardsToCartHandler = (articul) => {
        dispatch(addToCart(articul));
        closeModalHandler();
    }

    // Modals
    const onClickHandler = (articul) => {
        dispatch(setModalShow(ADD_TO_CART))
        dispatch(setCurrentArticul(articul));
    }

    const closeModalHandler = () => {
        dispatch(setModalClose(ADD_TO_CART))
    }

    // Favourites
    const changeFavouriteHandler = (articul) => {
        if (cardsInFavorites.includes(articul)) {
            dispatch(removeFavourites(articul));
        } else {
            dispatch(addToFavourites(articul));
        };
    };

    let content;
    if (isLoading) {
        content = (<Loader />)
    } else if (hasError) {
        content = (<div>Sorry, error</div>)
    }
    else {
        if (cardsInFavorites.length < 1) {
            content = <p className={styles.noItemsTitle}>No items in favourites</p>;
        } else {
            const filteredCards = cardsList.filter(({ articul }) => cardsInFavorites.includes(articul));
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
                <ModalRoot modalType={ADD_TO_CART}
                    modalProps={{
                        actions: createModalButtons('Ok', 'Cancel', addCardsToCartHandler, closeModalHandler, currrentCardArticul),
                        closeModalHandler: () => { closeModalHandler() },
                        header: 'Do you want to add this product to your cart?',
                        text: 'This item will be available in the cart',
                        closeButton: true,
                    }} />
                {content}
            </div>
        </div>
    );
};


export default Favourites;