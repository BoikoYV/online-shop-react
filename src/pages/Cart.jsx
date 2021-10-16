import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { getDataFromLs } from '../getDataFromLs';
import { getCardsList } from '../api/api';
import CartList from '../components/CartList/CartList';
import modalWindows from '../components/Modal/modals'
import Modal from '../components/Modal/Modal';

const Cart = () => {
    const [modals, setModals] = useState(modalWindows);
    const [cardsList, setCardsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [cardsInCart, setCardsInCart] = useState(getDataFromLs('cardsInCart'));

    // LocalStorage
    useEffect(() => {
        localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart));
    }, [cardsInCart])

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

    const deleteFromCartHandler = (articulNum) => {

        const [articul, ...rest] = cardsInCart;
        setCardsInCart(rest);
    }

    let content;
    if (isLoading) {
        content = (<p>Loading</p>);
    } else if (hasError) {
        content = (<div>Sorry, error</div>)
    }
    else {
        if (cardsInCart.length < 1) {
            content = <p className={styles.noItemsTitle}>No items in cart</p>;
        } else {
            const filteredCards = cardsList.cardsList.filter(({ articul }) => cardsInCart.includes(articul));
            content = (<CartList 
                cards={filteredCards} 
                deleteFromCartHandler={deleteFromCartHandler} />)
        }
    }



    return (
        <div className={styles.cartSection}>
            <div className={styles.container}>
                <h2 className={styles.cartTitle}>Cart - {cardsInCart.length} items</h2>
                <ul className={styles.listTitles}>
                    <li>Photo</li>
                    <li>Description</li>
                    <li>Count</li>
                    <li>Price</li>
                </ul>
                {content}
            </div>
        </div>
    );
};

export default Cart;