import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardInCart.module.css';
import TrashIcon from './TrashIcon';
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
               <TrashIcon />
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