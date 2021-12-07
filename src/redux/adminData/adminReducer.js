import { ADMIN_INFO } from "./adminType";

const initialState = {
    adminId: '',
    adminName: '',
    adminEmail: '',
    adminJwt: '',
    adminLogin: false

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_INFO: return {
            ...state,
            adminId: action.payload.adminId,
            adminName: action.payload.adminName,
            adminEmail: action.payload.adminEmail,
            adminJwt: action.payload.adminJwt,
            adminLogin: action.payload.adminLogin

        }
        default:return state
    }
}

export default adminReducer