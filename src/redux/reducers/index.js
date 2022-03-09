import { combineReducers } from "redux";
import userReducer from "../reducers/UserReducers";
import cartReducer from "./CartReducers";

const rootReducer = combineReducers({
    userReducer,
    cartReducer
})

export default rootReducer