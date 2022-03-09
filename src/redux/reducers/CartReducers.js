import { ADD_TO_CART } from "../actions/CartAction"

const initialState = {
    items: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            alert('add to cart')
            return { items: [...state.items, action.payload] }
        default:
            return state
    }
}

export default cartReducer