import { USER_INFO } from "./userType";

const initialState= {
    userId:'12345',
    userName:'sch',
    userJwt:'abcdefg',
    userPhone:'123',
    userMail:'abc@gmail.com',
    userLogin:false
}

const userReducer = (state=initialState,action)=>
{
    switch(action.type)
    {
        case USER_INFO: return{
            ...state,
            userId:action.payload.userId,
            userName:action.payload.userName,
            userJwt:action.payload.userJwt,
            userMail:action.payload.userMail,
            userPhone:action.payload.userPhone,
            userLogin:action.payload.userLogin,
            purchasedCourses:action.payload.purchasedCourses
        }
        default : return state
    }
}
export default userReducer