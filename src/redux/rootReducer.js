import { combineReducers } from "redux";
import userReducer from "./userData/userReducer";



const rootReducer = combineReducers({
    userData:userReducer
})
export default rootReducer