import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {

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