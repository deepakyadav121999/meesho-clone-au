import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { discprtionReducer } from "./discrptionReducer";
import{userReducer} from './userReducer'
import { cartReducer } from "./cartReducer";
import {totalReducer} from './totalReducer'
import { lengthReducer } from "./lengthReducer";
const reducers = combineReducers({
    products :productReducer,
    discription:discprtionReducer,
    user:userReducer,
    cart :cartReducer,
    total : totalReducer,
    length :lengthReducer
})
export  default reducers;