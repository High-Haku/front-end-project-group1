import { ADD_TO_MYLIBRARY } from "../actions/userAction"

const initialState = {
    name: 'user',
    email: 'user@mail.com',
    phone: '081234567890',
    address: 'Jl. Abc no.123 Blok D',
    myLibrary: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_TO_MYLIBRARY):
            return state
        default:
            return state
    }
}