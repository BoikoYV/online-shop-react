import React from 'react';
import { Formik, Form, ErrorMessage, FieldArray, useField } from 'formik';
import styles from './CartForm.module.css';
import btnStyles from '../Button/Button.module.css';
import { BasicFormSchema } from './BasicFormSchema';
import { formDataFields } from './formDataFields';
import NumberFormat from "react-number-format";
import { FormikInputBlock } from './FormikInputBlock';

const NumberFormatInputBlock = ({ name, label, id, placeholder, type }) => {
    const [field] = useField(name);

    return <div key={id} className={styles.fieldContainer}>
        <label className={styles.orderLabel} htmlFor={name}>{label}</label>
        <NumberFormat
            {...field}
            className={styles.orderInput}
            format="+38 (###) ###-##-##"
            allowEmptyFormatting mask="_"
            name={name}
            placeholder={placeholder}
            type={type}
        />
        <ErrorMessage component="p" className={styles.fieldError} name={name} />

    </div>
}

export const CartForm = () => {
    const handleFormSubmit = (values, { setSubmitting }) => {
        console.log('submit');
        console.log(values);
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
                                <button className={`${btnStyles.btn} ${styles.submitBtn}`} disabled={isSubmitting} type="submit">Submit</button>
                            </>)}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
};
