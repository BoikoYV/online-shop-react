import React, { useEffect } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './CardsList.module.css';


const CardList = props => {
    return (

        <ul>
            <Card />
        </ul>

    );
};

// CardList.propTypes = {

// };

export default CardList;