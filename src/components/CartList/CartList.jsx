import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CartList.module.css';
import CardInCart from '../CardInCart/CardInCart';
const CartList = ({ cardsList, cardsInCart }) => {
    let cardsComponents;

    console.log(cardsList, cardsInCart);
    // console.log(cardsInCart);

    if (cardsList) {
        console.log(cardsList);

        cardsComponents = cardsList.filter(({ title, price, articul, color, imgSrc }) => {
            // console.log(title);
            // if (cardsInCart.includes(articul)) {
            // console.log(articul);
            // console.log(<CardInCart key={articul} title={title} price={price} articul={articul} color={color} imgSrc={imgSrc} />);
            return <CardInCart key={articul} title={title} price={price} articul={articul} color={color} imgSrc={imgSrc} />
            // }

        });

    }
    console.log(cardsComponents);
    return (

        <ul className={styles.list}>
            {cardsComponents}
        </ul>

    );
};

CartList.propTypes = {

};

export default CartList;