import React, { useState, useEffect } from 'react';
import styles from '../App/App.module.css';
import { fetchCardsList } from '../store/cards/actions'
import { getDataFromLs } from '../getDataFromLs';
import createModalButtons from '../components/Modal/createModalButtons';
import CardsList from '../components/CardsList/CardsList';
import { ModalRoot } from '../components/Modal/ModalRoot';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, DELETE_FROM_CART } from '../store/modal/types';


const Cards = () => {

    const isLoading = useSelector(state => state.cards.isLoading);
    const cardsList = useSelector(state => state.cards.cards);
    const currrentCardArticul = useSelector(state => state.currrentCardArticul);
    const hasError = useSelector(state => state.hasError);
    const dispatch = useDispatch();

    const [cardsInCart, setCardsInCart] = useState(getDataFromLs('cardsInCart'));
    const [cardsInFavorites, setCardsInFavorites] = useState(getDataFromLs('favouriteCards'));

    useEffect(() => {
        dispatch(fetchCardsList());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        dispatch({
            type: 'SHOW_MODAL',
            modalType: ADD_TO_CART,
            modalProps: { currrentCardArticul: articul }
        });
        dispatch({
            type: 'SET_CURRENT_ARTICUL',
            payload: articul
        });
    }

    const closeModalHandler = () => {
        dispatch({
            type: 'HIDE_MODAL'
        })
    }

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
                    <ModalRoot modalType={ADD_TO_CART}
                        modalProps={{
                            actions: createModalButtons('Ok', 'Cancel', addCardsToCartHandler, closeModalHandler, currrentCardArticul),
                            closeModalHandler: () => { closeModalHandler() }
                        }} />
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Cards;