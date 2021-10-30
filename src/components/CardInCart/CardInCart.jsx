import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardInCart.module.css';
import TrashIcon from './TrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import { increaseProductQuantity, decreaseProductQuantity } from '../../store/cart/actions';
const NOIMGSRC = 'img/notfound.png';

const CardInCart = ({ articul, imgSrc, title, color, price, onClickHandler }) => {
    const cardsInCart = useSelector(({ cardsInCart }) => cardsInCart);
    const currentCard = cardsInCart.find(({ id }) => id === articul);

    const dispatch = useDispatch();


    const decrementHandler = () => {
        dispatch(decreaseProductQuantity(articul))
    }
    const incrementHandler = () => {
        dispatch(increaseProductQuantity(articul))
    }


    return (
        <li className={styles.item}>
            <img src={imgSrc ? imgSrc : NOIMGSRC} alt={title} className={styles.img} />
            <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.color}>Color: {color}</p>
                <p className={styles.articul}>Articul: {articul}</p>
            </div>
            <p className={styles.price}>{price} UAH</p>
            <p className={styles.quantity}>
                <button className={`${styles.quantityBtn} ${styles.decrement}`} onClick={decrementHandler}>-</button>
                <span>{currentCard.count}</span>
                <button className={`${styles.quantityBtn} ${styles.increment}`} onClick={incrementHandler}>+</button>
            </p>
            <p className={styles.total}>{currentCard.count * price} UAH</p>
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