import React, { useState } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import styles from './CartForm.module.css';
import btnStyles from '../Button/Button.module.css';
import { BasicFormSchema } from './BasicFormSchema';
import { formDataFields } from './formDataFields';
import { FormikInputBlock } from './formFields/FormikInputBlock';
import { NumberFormatInputBlock } from './formFields/NumberFormatInputBlock'
import { useDispatch } from 'react-redux';
import { ModalRoot } from '../../components/Modal/ModalRoot';
import { SHOW_CHECKOUT_MODAL } from '../../store/modal/types';
import { setCheckoutModalShow, setModalClose } from '../../store/modal/actions';
import { checkoutOrder } from '../../store/cart/actions';
import { removeDiscount } from '../../store/cart/actions';
import PropTypes from 'prop-types';

export const CartForm = (cards) => {
    const dispatch = useDispatch();
    const [values, setvalues] = useState(null);

    const handleFormSubmit = (values) => {
        setvalues(values);
        dispatch(setCheckoutModalShow(SHOW_CHECKOUT_MODAL))
    }
    const closeModalHandler = () => {
        dispatch(setModalClose(SHOW_CHECKOUT_MODAL));
        dispatch(checkoutOrder());
        dispatch(removeDiscount());
    }
    return (
        <>
            <div className={styles.formContainer}>
                <h1 className={styles.cartTitle}>2. Shipping info</h1>

                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        age: '',
                        phone: '',
                        address: ''
                    }}
                    validationSchema={BasicFormSchema}
                    onSubmit={handleFormSubmit}>

                    {({ isSubmitting }) => (
                        <Form className={styles.form}>
                            <FieldArray name="fields"
                                render={() => (<>
                                    <div className={styles.formInner}>
                                        {formDataFields.map(({ id, name, label, placeholder, type }) => {
                                            return name === 'phone' ?
                                                <NumberFormatInputBlock key={id} name={name} type={type} label={label} /> :
                                                <FormikInputBlock key={id} name={name} type={type} label={label} placeholder={placeholder} />
                                        })}
                                    </div>
                                    <button className={`${btnStyles.btn} ${styles.submitBtn}`} disabled={isSubmitting} type="submit">Checkout</button>
                                </>)}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
            <ModalRoot modalType={SHOW_CHECKOUT_MODAL}
                modalProps={{
                    closeModalHandler: () => { closeModalHandler() },
                    header: 'Your order has been received',
                    closeButton: true,
                    cards: { cards },
                    formValues: values ? values : null
                }} />
        </>
    )
};

CartForm.propTypes = {
    cards: PropTypes.array
};
CartForm.defaultProps = {
    cards: []
}