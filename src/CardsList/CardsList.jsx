import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './CardsList.module.css';


const CardsList = ({ cards, onClickHandler, idModal, changeFavouriteHandler}) => {
    const cardsComponents = cards.cardsList.map(({ title, price, articul, color, imgSrc }) => {
        return (
            <Card key={articul}
                title={title}
                price={price}
                articul={articul}
                color={color}
                imgSrc={imgSrc}
                idModal={idModal}
                onClickHandler={onClickHandler}
                changeFavouriteHandler={changeFavouriteHandler} />
        )
    })

    return (
        <ul className={styles.list}>
            {cardsComponents}
        </ul>
    );
};

CardsList.propTypes = {
    cards: PropTypes.object.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    idModal: PropTypes.number,
    addToFavouritesHandler: PropTypes.func.isRequired
};

CardsList.defaultProps = {
    cards: {},
    idModal: 1
};

export default CardsList;