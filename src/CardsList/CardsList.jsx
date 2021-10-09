import React, { useEffect } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './CardsList.module.css';


const CardsList = ({cards}) => {
  
    const cardsComponents = cards.cardsList.map(({ title, price, articul, color, imgSrc }) => {
        return (
            <Card key={articul}
                title={title}
                price={price}
                articul={articul}
                color={color}
                imgSrc={imgSrc} />
        )
    })

    return (

        <ul>
            {cardsComponents}
        </ul>

    );
};

CardsList.propTypes = {
    cardsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardsList;