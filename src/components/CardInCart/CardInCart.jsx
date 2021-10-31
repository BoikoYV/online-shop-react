import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardInCart.module.css';
import TrashIcon from './TrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import { increaseProductQuantity, decreaseProductQuantity } from '../../store/cart/actions';
import CheckoutList from '../CheckoutList/CheckoutList.module.css'

const NOIMGSRC = 'img/notfound.png';
const CardInCart = ({ articul, imgSrc, title, color, price, isPriceShow=true, onClickHandler, hasQuantityBtns = true, hasTrashIcon = true, orderModalStyles = false }) => {
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
        <li className={orderModalStyles ? CheckoutList.item : styles.item}>
            <img src={imgSrc ? imgSrc : NOIMGSRC} alt={title} className={styles.img} />
            <div className={orderModalStyles ? CheckoutList.itemInfo :styles.itemInfo}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.color}>Color: {color}</p>
                <p className={styles.articul}>Articul: {articul}</p>
            </div>
            {isPriceShow ? <p className={styles.price}>{price} UAH</p> : ''}

            <p className={styles.quantity}>
                {hasQuantityBtns ? <button className={`${styles.quantityBtn} ${styles.decrement}`} onClick={decrementHandler}>-</button> : ''}
                <span>{currentCard.count}</span>
                {hasQuantityBtns ? <button className={`${styles.quantityBtn} ${styles.increment}`} onClick={incrementHandler}>+</button> : ''}
            </p>
            <p className={styles.total}>{currentCard.count * price} UAH</p>
            {hasTrashIcon ? <button className={styles.deleteItemBtn} onClick={() => { onClickHandler(articul) }}>
                <TrashIcon />
            </button> : ''}

        </li>
    )
}

CardInCart.propTypes = {
    articul: PropTypes.number.isRequired,
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func
}

CardInCart.defaultProps = {
    imgSrc: "",
}

export default CardInCart;