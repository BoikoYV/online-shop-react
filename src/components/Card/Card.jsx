import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Button from '../Button/Button';
const NOIMGSRC = 'img/notfound.png';

const Card = ({ title, price, articul, color, imgSrc, onClickHandler, changeFavouriteHandler, isFavourite }) => {

    const isFavouriteClass = isFavourite ? styles.isFavourite : '';
    
    return (
        <li className={styles.item}>
            <img className={styles.itemImg} src={imgSrc ? imgSrc : NOIMGSRC} alt="bed for pets" />
            <div className={styles.cardInfo}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.cardColor}>
                    <span>Color: {color}</span>
                    <span className={styles.productColor} style={{ backgroundColor: `${color}` }}></span>
                </p>
                <p>Articul: {articul}</p>
                <button onClick={() => { changeFavouriteHandler(articul) }} className={styles.favouriteBox}>
                    <svg className={`${styles.favouriteIcon} ${isFavouriteClass}`} viewBox="0 0 122.88 117.1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m64.42 2 15.71 36.7 39.87 3.56a3.2 3.2 0 0 1 1.82 5.62l-30.18 26.3 8.9 39a3.19 3.19 0 0 1 -2.42 3.82 3.27 3.27 0 0 1 -2.46-.46l-34.25-20.44-34.34 20.54a3.18 3.18 0 0 1 -4.38-1.09 3.14 3.14 0 0 1 -.37-2.38l8.91-39-30.14-26.29a3.24 3.24 0 0 1 -.32-4.52 3.32 3.32 0 0 1 2.29-1l39.72-3.56 15.71-36.8a3.24 3.24 0 0 1 5.93 0z"
                            fill="#fff" />
                    </svg>
                </button>

                <p className={styles.cardPrice}>{price} UAH</p>
                <Button text='Add to card' onClickHandler={() => onClickHandler(articul)} />
            </div>
        </li>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    articul: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    onClickHandler: PropTypes.func.isRequired,
    changeFavouriteHandler: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool

};

Card.defaultProps = {
    imgSrc: ""
};
export default Card;