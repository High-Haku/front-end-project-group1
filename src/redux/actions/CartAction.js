export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const CLEAR_CART = 'CLEAR_CART';

export const addBookToCart = (book) => {
    return {
        type: ADD_TO_CART,
        payload: { book }
    }
}

export const removeBookFromCart = (book) => {
    return {
        type: REMOVE_FROM_CART,
        payload: { book }
    }
}

export const changeBookAmount = (book, qty) => {
    return {
        type: CHANGE_AMOUNT,
        payload: {
            book,
            amount: parseInt(qty)
        }
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}