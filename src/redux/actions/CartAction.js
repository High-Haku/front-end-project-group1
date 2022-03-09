export const ADD_TO_CART = 'ADD_TO_CART';

export const addBookToCart = (book) => {
    return {
        type: ADD_TO_CART,
        payload: book
    }
}