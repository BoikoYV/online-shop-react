import { useEffect, useState } from "react";
import styles from './OrderTotals.module.css';
import { getPromocodesList } from '../../api/getPromocodesList'
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

const OrderTotals = () => {
    const cardsInCart = useSelector(({ cardsInCart }) => cardsInCart);
    const [promocodes, setPromocodes] = useState(null);
    const [setError] = useState(false);
    const cardsList = useSelector(({ cards }) => cards.cards);
    const [discount, setDiscount] = useState(null);

    useEffect(() => {
        let mounted = true;
        getPromocodesList()
            .then(data => {
                if (mounted) {
                    setPromocodes(data);
                }
            })
            .catch(() => {
                setError(true)
            })
        return () => mounted = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const subtotalArr = cardsInCart.map(({ id, count }) => {
        const currentCard = cardsList.find(({ articul }) => articul === id);
        return currentCard && count * currentCard.price;
    })
    const subTotal = subtotalArr.reduce((sum, value) => {
        return sum + value
    }, 0);

    const total = subTotal * (1 - discount / 100);

    const handleSubmit = (values, { setSubmitting }) => {
        const { promocode } = values;
        const availablePromocode = promocodes.find(({ code }) => code === promocode.trim());
        availablePromocode && setDiscount(availablePromocode.discountInPercentage);
    }

    return (
        <div className={styles.orderTotals}>
            <Formik
                initialValues={{ promocode: '' }}
                onSubmit={handleSubmit}>
                {({ isSubmitting }) => (

                    <Form className={styles.promocodeForm}>
                        <p className={styles.promocodeFormTitle}>Apply a promo code</p>
                        <div className={styles.promocodeFieldContainer}>
                            <Field className={styles.promocodeField} name="promocode" type="text" placeholder="Enter promo code" />
                            <button className={styles.promocodeBtn} type="submit">Apply</button>
                        </div>
                    </Form >
                )}

            </Formik>
            <div className={styles.totalsContainer}>
                <h3 className={styles.totalsTitle}>Order totals</h3>
                <p className={styles.totalsPrices}><span>Subtotal:</span><span>{subTotal} UAH</span></p>
                <p className={styles.totalsPrices}><span>Discount:</span><span>{discount ? discount : '0'}%</span></p>
                <p className={styles.totalsPrices}><span className={styles.orderTotalPrice}>Order total:</span><span className={styles.totalPrice}>{total} UAH</span></p>
            </div>
        </div>
    );
};

export default OrderTotals;