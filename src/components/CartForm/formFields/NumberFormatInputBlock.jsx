import { ErrorMessage, useField } from 'formik';
import styles from '../CartForm.module.css';
import NumberFormat from "react-number-format";
import PropTypes from 'prop-types';

export const NumberFormatInputBlock = ({ name, label, id, placeholder, type }) => {
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

NumberFormatInputBlock.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
}

NumberFormatInputBlock.defaultProps = {
    placeholder: '',
    type: 'text',
    id: '',
}
