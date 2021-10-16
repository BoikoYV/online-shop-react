import PropTypes from 'prop-types';
import styles from './CartList.module.css';
import CardInCart from '../CardInCart/CardInCart';

const CartList = ({ cards, deleteFromCartHandler }) => {
    console.log(cards);
    let cardsComponents = cards.map(({ title, price, articul, color, imgSrc }) => {
        return (
            <CardInCart key={articul}
                title={title}
                price={price}
                articul={articul}
                color={color}
                imgSrc={imgSrc}
                deleteFromCartHandler={deleteFromCartHandler} />
        )
    });

    return (
        <ul className={styles.list}>
            {cardsComponents}
        </ul>
    );
};

CartList.propTypes = {
    cards: PropTypes.array
}
CartList.defaultProps = {
    cards: []
}
export default CartList;