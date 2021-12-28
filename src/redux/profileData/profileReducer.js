import { PROFILE_DATA } from "./profileType";

const initialState = {
    profileName: '',
    profileEmail: '',
    profilePhone: '',
    profileCountry: '',
    profileState: '',
    profileCity: '',
    profileQualification: '',
    profileDesignation:'',
    profileCourse:[],
    profileEnable: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DATA: return {
            ...state,
            profileName: action.payload.profileName,
            profileEmail: action.payload.profileEmail,
            profilePhone: action.payload.profilePhone,
            profileCountry: action.payload.profileCountry,
            profileState: action.payload.profileState,
            profileCity: action.payload.profileCity,
            profileQualification: action.payload.profileQualification,
            profileDesignation:action.payload.profileDesignation,
            profileCourse:action.payload.profileCourse,
            profileEnable: action.payload.profileEnable

        }
        default: return state
    }
}

export default profileReducer