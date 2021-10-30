import React from 'react';
import styles from './CardInCart.module.css';

const TrashIcon = () => {
    return (
        <svg className={styles.trashIcon} enableBackground="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#000" strokeWidth="2">
            <path d="m23 27h-12c-1.1 0-2-.9-2-2v-17h16v17c0 1.1-.9 2-2 2z" />
            <path d="m27 8h-20" />
            <path d="m14 8v-2c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2" />
            <path d="m17 23v-11" />
            <path d="m21 23v-11" />
            <path d="m13 23v-11" />
        </g>
    </svg>
    );
};

export default TrashIcon;