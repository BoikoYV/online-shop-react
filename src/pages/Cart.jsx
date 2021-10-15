import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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


    if (cardsInCart.length < 1) {
        content = 'No items in cart';
    } else {
        console.log(cardsList.cardsList);
        content = (<CartList cards={cardsList.cardsList} cardsInCart={cardsInCart} />);
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

Cart.propTypes = {

};

export default Cart;


