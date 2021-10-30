import React from 'react';
import PropTypes from 'prop-types';

const FavouriteIcon = ({ classes }) => {
    return (
        <svg className={classes} viewBox="0 0 122.88 117.1" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m64.42 2 15.71 36.7 39.87 3.56a3.2 3.2 0 0 1 1.82 5.62l-30.18 26.3 8.9 39a3.19 3.19 0 0 1 -2.42 3.82 3.27 3.27 0 0 1 -2.46-.46l-34.25-20.44-34.34 20.54a3.18 3.18 0 0 1 -4.38-1.09 3.14 3.14 0 0 1 -.37-2.38l8.91-39-30.14-26.29a3.24 3.24 0 0 1 -.32-4.52 3.32 3.32 0 0 1 2.29-1l39.72-3.56 15.71-36.8a3.24 3.24 0 0 1 5.93 0z"
                fill="#fff" />
        </svg>
    );
};

FavouriteIcon.propTypes = {
    classes: PropTypes.string
}

FavouriteIcon.defaultProps = {
    classes: '',
}

export default FavouriteIcon;