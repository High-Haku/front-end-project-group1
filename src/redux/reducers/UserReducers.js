import {
    ADD_TO_MYLIBRARY,
    REMOVE_FROM_MYLIBRARY,
    USER_LOGIN_INIT,
    CLEAR_DATA
} from "../actions/UserAction";

const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    myLibrary: [],
    purchaseHistory: [],
    id: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_MYLIBRARY:
            if (!state.myLibrary.find((data) => data.id === action.payload.id)) {
                alert("buku berhasil ditambahkan");
                return {
                    ...state,
                    myLibrary: [...state.myLibrary, action.payload],
                };
            }

            return state;

        case REMOVE_FROM_MYLIBRARY:
            const targetIndex = state.myLibrary.findIndex(
                (book) => book.id === action.payload.id
            );
            const newLibrary = state.myLibrary;
            newLibrary.splice(targetIndex, 1);
            alert("buku dihapus dari my library");
            return {
                ...state,
                myLibrary: newLibrary,
            };

        case USER_LOGIN_INIT:
            return action.payload;

        case CLEAR_DATA:
            return initialState

        default:
            return state;
    }
};

export default userReducer;