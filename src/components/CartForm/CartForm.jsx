import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import styles from './CartForm.module.css';
import btnStyles from '../Button/Button.module.css';
import { BasicFormSchema } from './BasicFormSchema';
import { formDataFields } from './formDataFields';


export const CartForm = () => {
    const handleFormSubmit = (values, { setSubmitting }) => {
        console.log('submit');
    }


    return (
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
                onSubmit={handleFormSubmit}
            >

                {({ isSubmitting }) => (
                    <Form>
                        <FieldArray name="fields"
                            render={() => (
                                <>
                                    <div className={styles.formInner}>
                                        {formDataFields.map(({ id, name, label, placeholder, type }) => (
                                            <div key={id} className={styles.fieldContainer}>
                                                <label className={styles.orderLabel} htmlFor={name}>{label}</label>

                                                <Field className={styles.orderInput}
                                                    name={name}
                                                    placeholder={placeholder}
                                                    type={type} />
                                                <ErrorMessage component="p" className={styles.fieldError} name={name} />
                                            </div>
                                        ))}

                                    </div>
                                    <button className={`${btnStyles.btn} ${styles.submitBtn}`} disabled={isSubmitting} type="submit">Submit</button>
                                </>
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )

};
