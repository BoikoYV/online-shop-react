import React, { useEffect } from 'react';
import { fetchCardsList } from '../../store/cards/actions'
import styles from './Cart.module.css';
import CartList from '../../components/CartList/CartList';
import createModalButtons from '../../components/Modal/basicModal/createModalButtons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cart/actions';
import { SHOW_REMOVE_FROM_CART_MODAL } from '../../store/modal/types';
import { setRemoveFromCartModalShow, setModalClose } from '../../store/modal/actions';
import { ModalRoot } from '../../components/Modal/ModalRoot';
import { setCurrentArticul } from '../../store/currentCardArticul/actions';
import Loader from '../../components/Loader/Loader';
import { CartForm } from '../../components/CartForm/CartForm';

const Cart = () => {
    const isLoading = useSelector(({ cards }) => cards.isLoading);
    const cardsList = useSelector(({ cards }) => cards.cards);
    const currrentCardArticul = useSelector(({ currrentCardArticul }) => currrentCardArticul);
    const cardsInCart = useSelector(({ cardsInCart }) => cardsInCart);
    const hasError = useSelector(({ hasError }) => hasError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCardsList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteFromCartHandler = (articul) => {
        dispatch(removeFromCart(articul));
        closeModalHandler();
    }

    // Modals
    const onClickHandler = (articul) => {
        dispatch(setRemoveFromCartModalShow(SHOW_REMOVE_FROM_CART_MODAL, { articul }))
        dispatch(setCurrentArticul(articul));
    }

    const closeModalHandler = () => {
        dispatch(setModalClose(SHOW_REMOVE_FROM_CART_MODAL));
    }

    let content;
    if (isLoading) {
        content = (<Loader />)
    } else if (hasError) {
        content = (<div>Sorry, error</div>)
    }
    else if (cardsInCart.length < 1) {
        content = <p className={styles.noItemsTitle}>No items in cart</p>;
    } else {
        const filteredCards = cardsList.filter(({ articul }) => {
            return cardsInCart.includes(articul)
        });
        content = (<>
            <CartList
                cards={filteredCards}
                onClickHandler={onClickHandler} />
            <CartForm />
        </>)
    }

    return (
        <div className={styles.cartSection}>
            <div className={styles.container}>
                <h2 className={styles.cartTitle}>1. Products  - {cardsInCart.length}</h2>
                <div className={styles.cartInner}>
                    <ul className={styles.listTitles}>
                        <li>Photo</li>
                        <li>Description</li>
                        <li>Count</li>
                        <li>Price</li>
                    </ul>
                    {content}
                </div>
            </div>
            <ModalRoot modalType={SHOW_REMOVE_FROM_CART_MODAL}
                modalProps={{
                    actions: createModalButtons('Delete', 'Cancel', deleteFromCartHandler, closeModalHandler, currrentCardArticul.currentArticul),
                    closeModalHandler: () => { closeModalHandler() },
                    header: 'Do you want to delete this product ?',
                    text: 'This product will be deleted from the cart',
                    closeButton: true,
                }} />
        </div>
    );
};

export default Cart;