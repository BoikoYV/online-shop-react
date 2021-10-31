export const countTotalWithDiscount = (subTotal, discount) => {
    return subTotal * (1 - discount / 100);
}