import { COURSE_TYPE } from "./courseType";

export const courseAction = (data)=>
{
    return{
        type:COURSE_TYPE,
        payload:data
    }
}