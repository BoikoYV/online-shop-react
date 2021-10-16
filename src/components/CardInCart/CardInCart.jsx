import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardInCart.module.css'
const NOIMGSRC = 'img/notfound.png';

const CardInCart = ({ articul, imgSrc, title, color, price, onClickHandler }) => {

    return (
        <li className={styles.item}>
            <img src={imgSrc ? imgSrc : NOIMGSRC} alt={title} className={styles.img} />
            <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.color}>Color: {color}</p>
                <p className={styles.articul}>Articul: {articul}</p>
            </div>
            <p className={styles.count}>{1}</p>
            <p className={styles.price}>{price} UAH</p>
            <button className={styles.deleteItemBtn} onClick={() => { onClickHandler(articul) }}>
                <svg className={styles.trashIcon} enableBackground="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#000" strokeWidth="2">
                        <path d="m23 27h-12c-1.1 0-2-.9-2-2v-17h16v17c0 1.1-.9 2-2 2z" />
                        <path d="m27 8h-20" />
                        <path d="m14 8v-2c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2" />
                        <path d="m17 23v-11" />
                        <path d="m21 23v-11" />
                        <path d="m13 23v-11" />
                    </g>
                </svg>
            </button>
        </li>
    )
}

CardInCart.propTypes = {
    articul: PropTypes.number.isRequired,
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

CardInCart.defaultProps = {
    imgSrc: "",
}

export default CardInCart;