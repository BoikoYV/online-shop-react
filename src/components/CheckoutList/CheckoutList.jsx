import PropTypes from 'prop-types';
import styles from './CheckoutList.module.scss';
import CardInCart from '../CardInCart/CardInCart';

const CheckoutList = ({ cards, modalCard }) => {

    let cardsComponents = cards.map(({ title, price, articul, imgSrc, color, orderModalStyles }) => {
        return (
            <CardInCart key={articul}
                title={title}
                price={price}
                color={color}
                articul={articul}
                imgSrc={imgSrc}
                hasQuantityBtns={false}
                hasTrashIcon={false}
                isPriceShow={false}
                orderModalStyles={true} />
        )
    });

    return (
        <ul className={styles.products}>
            {cardsComponents}
        </ul>
    );
};

CheckoutList.propTypes = {
    cards: PropTypes.array,
    modalCard: PropTypes.bool
}

CheckoutList.defaultProps = {
    cards: [],
    modalCard:false
}

export default CheckoutList;