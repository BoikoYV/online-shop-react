import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ backgroundColor, text, onClickHandler, idModal }) => {
    return (
        <button className={styles.btn}
            style={{ backgroundColor: backgroundColor }}
            onClick={() => { onClickHandler(idModal) }}>{text}</button>
    );
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    idModal: PropTypes.number.isRequired
};


export default Button;