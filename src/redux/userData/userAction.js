import { USER_INFO } from "./userType";

export const userData = (data) => {
    return {
        type: USER_INFO,
        payload: data
    }
}