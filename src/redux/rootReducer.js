import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./userData/userReducer";


const persistConfig = {
    key:'root',
    storage,
    whitelist:['userData']
}
const rootReducer = combineReducers({
    userData:userReducer
})
export default persistReducer(persistConfig,rootReducer)