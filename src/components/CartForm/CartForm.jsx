import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import styles from './CartForm.module.css';
import btnStyles from '../Button/Button.module.css';
import { BasicFormSchema } from './BasicFormSchema';
import { formDataFields } from './formDataFields';
import { FormikInputBlock } from './formFields/FormikInputBlock';
import { NumberFormatInputBlock } from './formFields/NumberFormatInputBlock'
import { useDispatch, useSelector } from 'react-redux';
import { ModalRoot } from '../../components/Modal/ModalRoot';
import { SHOW_CHECKOUT_MODAL } from '../../store/modal/types';
import { setCheckoutModalShow, setModalClose } from '../../store/modal/actions';

export const CartForm = (changeModalHandler) => {
    const dispatch = useDispatch();
    const cardsInCart = useSelector(({ cardsInCart }) => cardsInCart);

    const handleFormSubmit = (values, { setSubmitting }) => {
        console.log('submit');
        console.log(values);
        console.log(cardsInCart);
        dispatch(setCheckoutModalShow(SHOW_CHECKOUT_MODAL))

    }
    const closeModalHandler = () => {
        dispatch(setModalClose(SHOW_CHECKOUT_MODAL));
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
                        <Form>
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
                        // actions: createModalButtons('Delete', 'Cancel', deleteFromCartHandler, closeModalHandler, currrentCardArticul.currentArticul),
                        closeModalHandler: () => { closeModalHandler() },
                        header: 'Checkout',
                        text: 'Checkout text',
                        closeButton: true,
                    }} />
        </>
    )
};
