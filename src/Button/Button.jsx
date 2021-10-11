import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, onClickHandler, idModal  }) => {
    return (
        <button className={styles.btn}
            onClick={() =>onClickHandler(idModal)}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    idModal: PropTypes.number
};


export default Button;