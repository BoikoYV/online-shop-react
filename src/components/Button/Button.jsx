import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ text, onClickHandler }) => {
    return (
        <button className={styles.btn}
            onClick={() => onClickHandler()}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func
};



export default Button;