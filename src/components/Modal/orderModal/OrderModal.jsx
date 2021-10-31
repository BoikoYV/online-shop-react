import { useSelector } from 'react-redux';
import styles from '../basicModal/Modal.module.css';
import CheckoutIcon from './CheckoutIcon';
import orderModalStyles from './OrderModal.module.css';
import CheckoutList from '../../CheckoutList/CheckoutList';
import { countSubtotal } from '../../../helpers/countSubtotal';
import { countTotalWithDiscount } from '../../../helpers/countTotalWithDiscount'
import PropTypes from 'prop-types';

export const OrderModal = ({ header, closeButton, formValues, closeModalHandler }) => {
    const modalIsShown = useSelector(({ modal }) => modal.checkoutModalIsOpen);
    const classHide = !modalIsShown ? styles.hide : '';
    const cardsList = useSelector(({ cards }) => cards.cards);
    const cardsInCart = useSelector(({ cardsInCart }) => cardsInCart);
    const discount = useSelector(({ discount }) => discount);

    const filteredCards = cardsList.filter(({ articul }) => {
        return cardsInCart.find(({ id }) => {
            return articul === id;
        })
    });

    const normalizeInputKeys = (key) => {
        if (key === 'firstName') return 'First name';
        if (key === 'lastName') return 'Last name';
        return key[0].toUpperCase() + key.slice(1);
    }

    const dataArr = [];
    if (formValues) {
        let i = 0;
        for (const [key, value] of Object.entries(formValues)) {
            dataArr.push(<li key={i++}>
                <span className={orderModalStyles.filedName}>{normalizeInputKeys(key)}</span>: {value}
            </li>)
        }
    };

    const subTotal = countSubtotal(cardsInCart, cardsList);
    const total = countTotalWithDiscount(subTotal, discount);

    return (
        <>
            <div className={`${styles.modalBox} ${modalIsShown ? '' : styles.hide}`}>
                <div className={`${styles.header} ${orderModalStyles.header}`}>
                    <button onClick={() => { closeModalHandler() }} className={closeButton ? `${styles.closeBtn} ${orderModalStyles.closeBtn}` : ''}></button>
                    <CheckoutIcon />
                    <h2 className={`${styles.headerTitle} ${orderModalStyles.headerTitle}`}>{header}</h2>
                </div>
                <div className={orderModalStyles.orderInfoBlock}>
                    <p className={orderModalStyles.orderDetailsTitle}>Customer info</p>

                    <ul className={orderModalStyles.customerDataList}>
                        {[...dataArr]}
                    </ul>
                    <p className={orderModalStyles.orderDetailsTitle}>Products info</p>
                    <ul className={orderModalStyles.productsTitles}>
                        <li>Products</li>
                        <li>Qty</li>
                        <li>Subtotal</li>
                    </ul>
                    <div className={orderModalStyles.itemsList}>
                        <CheckoutList cards={filteredCards} />
                    </div>

                    <p className={orderModalStyles.discount}><span>Discount:</span><span>{discount ? discount : '0'}%</span></p>
                    <p className={orderModalStyles.total}><span>Total:</span><span>{total} UAH</span></p>
                </div>
                <button className={orderModalStyles.btn} onClick={() => { closeModalHandler() }}>Ok</button>
            </div>

            <div onClick={() => { closeModalHandler() }} className={`${styles.overlay} ${classHide}`}></div>
        </>
    )
}

OrderModal.propTypes = {
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    formValues: PropTypes.object,
    closeModalHandler: PropTypes.func.isRequired,
};

OrderModal.defaultProps = {
    formValues: {},
    closeButton: true
};