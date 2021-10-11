import React, { useEffect } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './CardsList.module.css';


const CardsList = ({ cards, onClickHandler, idModal }) => {
    const cardsComponents = cards.cardsList.map(({ title, price, articul, color, imgSrc }) => {
        return (
            <Card key={articul}
                title={title}
                price={price}
                articul={articul}
                color={color}
                imgSrc={imgSrc}
                idModal={idModal}
                onClickHandler={onClickHandler} />
        )
    })

    return (

        <ul className={styles.list}>
            {cardsComponents}
        </ul>

    );
};

CardsList.propTypes = {
    cardsList: PropTypes.array.isRequired
};
CardsList.defaultProps = {
    cardsList: []
};

export default CardsList;