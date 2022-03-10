import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT, CLEAR_CART } from "../actions/CartAction"

const initialState = {
    items: []
}

const cartReducer = (state = initialState, action) => {
    let targetIndex;
    let newItems;

    if (action.hasOwnProperty('payload')) {
        if (action.payload.hasOwnProperty('book')) {
            targetIndex = state.items.findIndex(book => book.id == action.payload.book.id);
            newItems = state.items;
        }
    }

    switch (action.type) {
        case ADD_TO_CART:
            alert('add to cart')
            return { items: [...state.items, action.payload.book] }

        case REMOVE_FROM_CART:
            newItems.splice(targetIndex, 1);
            return {
                items: newItems
            }

        case CHANGE_AMOUNT:
            newItems[targetIndex].amount = action.payload.amount
            return {
                items: newItems
            }

        case CLEAR_CART:
            return { items: [] }

        default:
            return state
    }
}

export default cartReducer