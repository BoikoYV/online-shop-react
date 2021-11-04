import React from 'react';
import styles from './CardInCart.module.scss';

const TrashIcon = () => {
    return (
        <svg className={styles.trashIcon} xmlns="http://www.w3.org/2000/svg" width="19" height="21" fill="none" viewBox="0 0 19 21">
            <path stroke="#727272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.89 8.554c0 8.02 1.154 11.644-6.61 11.644-7.765 0-6.587-3.625-6.587-11.644M17.365 5.48H1.215M12.715 5.48s.528-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766" />
        </svg>

    );
};

export default TrashIcon;