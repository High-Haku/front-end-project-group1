export const ADD_TO_MYLIBRARY = 'ADD_TO_MYLIBRARY';
export const REMOVE_FROM_MYLIBRARY = 'REMOVE_FROM_MYLIBRARY';
export const USER_LOGIN_INIT = 'USER_LOGIN_INIT';

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

export const userLoginInit = (user) => {
    return {
        type: USER_LOGIN_INIT,
        payload: user
    }
}