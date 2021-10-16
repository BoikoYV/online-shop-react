import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { getDataFromLs } from '../getDataFromLs';
import { getCardsList } from '../api/api';
import CartList from '../components/CartList/CartList';

const Cart = () => {
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

    let content;
    if (isLoading) {
        content = (<p>Loading</p>);
    } else if (hasError) {
        content = (<div>Sorry, error</div>)
    }
    else {
        if (cardsInCart.length < 1) {
            content = 'No items in cart';
        } else {
            const filteredCards = cardsList.cardsList.filter(({ articul }) => cardsInCart.includes(articul));
            content = (<CartList cards={filteredCards} />)
        }
    }

    return (
        <div>
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