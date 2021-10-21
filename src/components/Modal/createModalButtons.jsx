import modalStyles from './Modal.module.css';
import Button from '../Button/Button';

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

export default createModalButtons;