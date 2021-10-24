import React, { useEffect } from 'react';
import styles from '../App/App.module.css';
import { fetchCardsList } from '../store/cards/actions'
import createModalButtons from '../components/Modal/basicModal/createModalButtons';
import CardsList from '../components/CardsList/CardsList';
import { ModalRoot } from '../components/Modal/ModalRoot';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../store/modal/types';
import { addToFavourites, removeFavourites } from '../store/favourites/actions';
import { addToCart } from '../store/cart/actions';
import { setModalShow, setModalClose } from '../store/modal/actions';
import { setCurrentArticul } from '../store/currentCardArticul/actions';
import Loader from '../components/Loader/Loader';
const Cards = () => {

    const isLoading = useSelector(({ cards }) => cards.isLoading);
    const cardsList = useSelector(({ cards }) => cards.cards);
    const currrentCardArticul = useSelector(({ currrentCardArticul }) => currrentCardArticul);
    const cardsInFavorites = useSelector(({ favourites }) => favourites);
    // const cardsInCart = useSelector(({ cardsInCart }) => cardsInCart);
    const hasError = useSelector(({ hasError }) => hasError);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCardsList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    }
    else if (hasError) {
        content = (<div>Sorry, error</div>)

    } else {
        content = (
            <CardsList cards={cardsList}
                onClickHandler={onClickHandler}
                changeFavouriteHandler={changeFavouriteHandler}
                favouritesCardsArr={cardsInFavorites} />
        )
    }

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles.appInner}>
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
        </div>
    );
};

export default Cards;