import React, { Component } from 'react';
import styles from './Button.module.css';
import Modal from '../Modal/Modal';

class Button extends Component {

    // onClickHandler = (id) => {
    //     const { onClick } = this.props;
    //     console.log('click');
    // }

    render() {
        const { backgroundColor, text, onClickHandler, idModal } = this.props;
        return (
            <>
                <button className={styles.btn}
                    style={{ backgroundColor: backgroundColor }}
                    onClick={() => { onClickHandler(idModal) }}>{text}</button>

            </>
        );
    }
}

export default Button;