import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, price, articul, color, imgSrc }) => {
    return (
        <li>
            <h2>{title}</h2>
            <img src={imgSrc} alt="bed for pets" />
            <p>Color: {color}</p>
            <p>Price: {price} UAH</p>
            <p>articul: {articul}</p>
        </li>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    articul: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,

};

export default Card;