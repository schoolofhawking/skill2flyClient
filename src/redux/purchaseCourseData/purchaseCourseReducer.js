import { PURCHASE_COURSE_DATA } from "./purchaseCourseType";

const initialState = {
    courseName: '',
    categoryName: '',
    discountPrice: '',
    actualPrice: '',
    discountPercentage: '',
    courseId: '',
}

const purchaseCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_COURSE_DATA: return {
            ...state,
            courseName: action.payload.courseName,
            categoryName: action.payload.categoryName,
            discountPrice: action.payload.discountPrice,
            actualPrice: action.payload.actualPrice,
            discountPercentage: action.payload.discountPercentage,
            id: action.payload.courseId,
            
        }
        default: return state
    }
}

export default purchaseCourseReducer