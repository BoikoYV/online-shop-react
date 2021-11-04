import React from 'react';
import styles from './Error.module.scss';

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.errorContainer}>
                <div className={styles.errorTextBlock}>
                    <p className={styles.errorNum}>404</p>
                    <p className={styles.errorMessage}>Sorry, we couldn't find the page</p>
                </div>
                <div className={styles.imgContainer}></div>
            </div>
        </div>
    );
};

export default Error;