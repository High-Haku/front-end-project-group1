import { ADD_TO_MYLIBRARY, REMOVE_FROM_MYLIBRARY } from "../actions/UserAction";

const initialState = {
    name: "user",
    email: "user@mail.com",
    phone: "081234567890",
    address: "Jl. Abc no.123 Blok D",
    myLibrary: [],
    purchaseHistory: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_MYLIBRARY:
            if (!state.myLibrary.find((data) => data.id === action.payload.id)) {
                alert('buku berhasil ditambahkan');
                return {
                    ...state,
                    myLibrary: [...state.myLibrary, action.payload],
                }
            }

            return state

        case REMOVE_FROM_MYLIBRARY:
            const targetIndex = state.myLibrary.findIndex(book => book.id == action.payload.id);
            const newLibrary = state.myLibrary;
            newLibrary.splice(targetIndex, 1);
            alert('buku dihapus dari my library')
            return {
                ...state,
                myLibrary: newLibrary
            };

        default:
            return state;
    }
};

export default userReducer;