import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardInCart.module.css'

const CardInCart = ({ articul, imgSrc, title, color, price }) => {
    return (
        <li className={styles.item}>
            <img src={imgSrc} alt={title} className={styles.img} />
            <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.color}>{color}</p>
                <p className={styles.articul}>{articul}</p>
            </div>
            <p>count</p>
            <p className={styles.price}>{price}</p>
            <button className={styles.deleteItemBtn}>Delete</button>
        </li>
    )
}

CardInCart.propTypes = {
    articul: PropTypes.number.isRequired,
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

CardInCart.defaultProps = {
    imgSrc: "",
}

export default CardInCart;