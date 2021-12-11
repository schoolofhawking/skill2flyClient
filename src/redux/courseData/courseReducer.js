import { COURSE_TYPE } from "./courseType";

const initialState={
    course:[]
}
const courseReducer = (state=initialState,action)=>
{
    switch(action.type){
        case COURSE_TYPE: return{
            ...state,
            course:action.payload.courseData
        }
        default: return state
    }
}
export default courseReducer