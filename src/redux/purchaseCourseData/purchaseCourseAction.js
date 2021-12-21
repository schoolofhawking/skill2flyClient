import { PURCHASE_COURSE_DATA } from "./purchaseCourseType";

export const purchaseCourseAction = (data)=>
{
    return {
        type:PURCHASE_COURSE_DATA,
        payload:data
    }
}