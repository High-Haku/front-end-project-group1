export const ADD_TO_MYLIBRARY = 'ADD_TO_MYLIBRARY';
export const REMOVE_FROM_MYLIBRARY = 'REMOVE_FROM_MYLIBRARY';

export const addBookToMyLibrary = (book) => {
    return {
        type: ADD_TO_MYLIBRARY,
        payload: book
    }
}

export const removeBookFromMyLibrary = (book) => {
    return {
        type: REMOVE_FROM_MYLIBRARY,
        payload: book
    }
}