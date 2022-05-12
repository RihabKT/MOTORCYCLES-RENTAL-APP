import { GET_PROFILE, GET_PROFILES, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS, GET_USER, GET_USERS, LOGOUT, USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS } from "../constants/actionTypes"



const initialState = {
    loading: false,
    isAuth: false,
    userId: {},
    users:[]
   
}

const userReducer = (state = initialState, action) =>{
switch (action.type){
    
    case USER_REGISTER:
    case USER_LOGIN:
    case GET_PROFILE:
        return {...state, loading:true}


    case USER_REGISTER_SUCCESS:
        return {...state, loading:false, msg:action.payload}
    case USER_LOGIN_SUCCESS:
        return {...state, loading:false, token:action.payload.token, isAuth:true}
    case GET_PROFILE_SUCCESS:
        return {...state, loading:false, user:action.payload, isAuth:true}


    case USER_REGISTER_FAILURE:
    case USER_LOGIN_FAILURE:
    case GET_PROFILE_FAILURE:
        return {...state, loading:false, msg:action.payload}


    case LOGOUT:
        return {...state, loading:false, isAuth:false}

    case GET_USER:
            return {...state, userId:action.payload}

    case GET_USERS:
                return {...state, users:action.payload}
    

    case GET_PROFILES:
        return {...state, users:action.payload} 

    default: return state;
    
    }

}



export default userReducer