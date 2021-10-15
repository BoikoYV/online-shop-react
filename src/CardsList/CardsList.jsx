import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './CardsList.module.css';


const CardsList = ({ cards, onClickHandler, idModal, changeFavouriteHandler, favouritesCardsArr }) => {

    const cardsComponents = cards.cardsList.map(({ title, price, articul, color, imgSrc }) => {
        return (
            <Card key={articul}
                title={title}
                price={price}
                articul={articul}
                color={color}
                imgSrc={imgSrc}
                idModal={idModal}
                isFavourite={favouritesCardsArr.includes(articul) ? true : false}
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
    changeFavouriteHandler: PropTypes.func.isRequired,
    favouritesCardsArr: PropTypes.array
};

CardsList.defaultProps = {
    cards: {},
    idModal: 1,
    favouritesCardsArr: []
};

export default CardsList;