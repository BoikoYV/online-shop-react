import modalStyles from './Modal.module.scss';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';

const createModalButtons = (text1, text2, okBtnFunc, cancelBtnFunc, currentArticul) => {
    return (
        <>
            <Button
                onClickHandler={() => { okBtnFunc(currentArticul) }}
                className={`${modalStyles.btn} ${modalStyles.okBtn}`}
                text={text1}
            />
            <Button
                onClickHandler={() => { cancelBtnFunc() }}
                className={`${modalStyles.btn} ${modalStyles.cancelBtn}`}
                text={text2}
            />
        </>
    )
}

createModalButtons.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    okBtnFunc: PropTypes.func.isRequired,
    cancelBtnFunc: PropTypes.func.isRequired,
    currentArticul: PropTypes.string.isRequired,
}

createModalButtons.defaultProps = {
    text1: 'Ok',
    text2: 'Cancel'
}


export default createModalButtons;