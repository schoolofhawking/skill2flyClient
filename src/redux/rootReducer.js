import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./userData/userReducer";
import profileReducer from "./profileData/profileReducer";
import adminReducer from "./adminData/adminReducer";
import courseReducer from "./courseData/courseReducer";
import purchaseCourseReducer from './purchaseCourseData/purchaseCourseReducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['userData']
}
const rootReducer = combineReducers({
    userData:userReducer,
    profileData:profileReducer,
    adminData:adminReducer,
    courseData:courseReducer,
    purchaseCourseData:purchaseCourseReducer
})
export default persistReducer(persistConfig,rootReducer)