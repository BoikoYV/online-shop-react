import PropTypes from 'prop-types';
import styles from './CartList.module.css';
import CardInCart from '../CardInCart/CardInCart';

const CartList = ({ cards, onClickHandler }) => {
    let cardsComponents = cards.map(({ title, price, articul, color, imgSrc }) => {
        return (
            <CardInCart key={articul}
                title={title}
                price={price}
                articul={articul}
                color={color}
                imgSrc={imgSrc}
                onClickHandler={onClickHandler} />
        )
    });

    return (
        <ul className={styles.list}>
            {cardsComponents}
        </ul>
    );
};

CartList.propTypes = {
    cards: PropTypes.array,
    onClickHandler: PropTypes.func.isRequired,
}

CartList.defaultProps = {
    cards: []
}

export default CartList;