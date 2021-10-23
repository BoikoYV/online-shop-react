import React, { useState, useEffect } from 'react';
import { getCardsList } from '../../api/getCardsList';
import { getDataFromLs } from '../../getDataFromLs';
import styles from './Cart.module.css';
import CartList from '../../components/CartList/CartList';
import Modal from '../../components/Modal/Modal';
import modalStyles from '../../components/Modal/Modal.module.css';
import createModalButtons from '../../components/Modal/createModalButtons';

const Cart = () => {
    const [cardsList, setCardsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError] = useState(false);
    const [currrentCardArticul, setCurrrentCardArticul] = useState(null);
    const [cardsInCart, setCardsInCart] = useState(getDataFromLs('cardsInCart'));
    const [isModalOpen, setIsModalOpen] = useState(false);

    // LocalStorage
    useEffect(() => {
        localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart));
    }, [cardsInCart])

    const fetchCardsList = () => {
        getCardsList()
            .then(cards => {
                setCardsList(cards);
            })
            .catch(err => {
                console.error(err.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchCardsList();
    }, [])

    const deleteFromCartHandler = (currentArticul) => {
        // const [currrentCardArticul, ...rest] = cardsInCart;
        const filtered  = cardsInCart.filter((articul) => articul !== currentArticul);
        setCardsInCart(filtered);
        closeModalHandler();
    }

    // Modals
    const onClickHandler = (articul) => {
        setCurrrentCardArticul(articul);
        setIsModalOpen(true);
    }

    const closeModalHandler = () => {
        setIsModalOpen(false);
    }

    const classHide = !isModalOpen ? modalStyles.hide : '';

    let content;
    if (isLoading) {
        content = (<p>Loading</p>);
    } else if (hasError) {
        content = (<div>Sorry, error</div>)
    }
    else {
        if (cardsInCart.length < 1) {
            content = <p className={styles.noItemsTitle}>No items in cart</p>;
        } else {
            const filteredCards = cardsList.cardsList.filter(({ articul }) => cardsInCart.includes(articul));
            content = (<CartList
                cards={filteredCards}
                onClickHandler={onClickHandler} />)
        }
    }

    return (
        <div className={styles.cartSection}>
            <div className={styles.container}>
                <h2 className={styles.cartTitle}>Cart - {cardsInCart.length} items</h2>
                <ul className={styles.listTitles}>
                    <li>Photo</li>
                    <li>Description</li>
                    <li>Count</li>
                    <li>Price</li>
                </ul>
                <Modal
                    header='Do you want to delete this product ?'
                    closeButton={true}
                    text='This product will be deleted from the cart'
                    isShown={isModalOpen}
                    actions={createModalButtons('Delete', 'Cancel', deleteFromCartHandler, closeModalHandler, currrentCardArticul)}
                    closeModalHandler={closeModalHandler} />
                {content}
                <div onClick={closeModalHandler} className={`${modalStyles.overlay} ${classHide}`}></div>
            </div>
        </div>
    );
};

export default Cart;