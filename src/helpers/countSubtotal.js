export const countSubtotal = (cardsInCart, cardsList) => {
    const subtotalArr = cardsInCart.map(({ id, count }) => {
        const currentCard = cardsList.find(({ articul }) => articul === id);
        return currentCard && count * currentCard.price;
    })
    
    const subTotal = subtotalArr.reduce((sum, value) => {
        return sum + value
    }, 0);
    return subTotal;
}

