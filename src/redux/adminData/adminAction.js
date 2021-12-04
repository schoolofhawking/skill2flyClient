import { ADMIN_INFO } from "./adminType";

export const adminData = (data)=>
{
    return{
        type:ADMIN_INFO,
        payload:data
    }
}