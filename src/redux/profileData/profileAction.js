import { PROFILE_DATA } from "./profileType";

export const profileData = (data)=>
{
    return {
        type:PROFILE_DATA,
        payload:data
    }
}