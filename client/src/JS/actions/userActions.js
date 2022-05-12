import axios from "axios";
import { GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS, GET_USER, GET_USERS, LOGOUT, USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS } from "../constants/actionTypes";
import { message } from "antd";


//user register
export const userRegister = (newUser) => async(dispatch) =>{
 dispatch({type: USER_REGISTER})

 try{
     const res = await axios.post("http://localhost:5000/api/theroadismine/user/register", newUser)
     dispatch ({type:USER_REGISTER_SUCCESS, payload:res.data})
     message.success("WELL DONE...SUCCESSFUL REGISTRATION!")
 }
 catch(error){
     dispatch({type: USER_REGISTER_FAILURE, payload: error.response.data})
     message.error("OOOUUPS...PLEASE ENTER VALID INFORMATION!")
     console.log(error)
 }
}

//user login
export const userLogin = (userInfo) => async(dispatch) =>{
    dispatch({type: USER_LOGIN})

    try{
        const res = await axios.post("http://localhost:5000/api/theroadismine/user/login", userInfo)
        await localStorage.setItem("token", res.data.token)
        dispatch({type: USER_LOGIN_SUCCESS, payload: res.data})
        message.success("WELCOME! CHOOSE YOUR MOTORCYCLE TO RENT")
    }
    catch(error){
        dispatch({type: USER_LOGIN_FAILURE})
        message.error("OOUUPS...PLEASE ENTER CORRECT EMAIL AND PASSWORD!")
        console.log(error)
    }
}

//get profile
export const getProfile = () => async(dispatch) =>{
    dispatch({type: GET_PROFILE})

    const config ={
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    try{
        const res = await axios.get("http://localhost:5000/api/theroadismine/user/currentuser", config)
        dispatch({type: GET_PROFILE_SUCCESS, payload: res.data})
      
    }
    catch(error){
        dispatch({type: GET_PROFILE_FAILURE, payload: error.response.data})
        console.log(error)
    }

}

//logout
export const logout = () => (dispatch) => {
    dispatch({type: LOGOUT})
    try{
        localStorage.removeItem("token")
    }
    catch(error){
        console.log(error)
    }
}


export const getUser = (id) => (dispatch) =>{
    axios.get(`http://localhost:5000/api/theroadismine/user/currentuser/${id}`)
         .then(res =>dispatch({type: GET_USER, payload:res.data}))
         .catch(err => console.log(err))
}


export const editUser = (id,editUser) => (dispatch) => {
    axios.put( `http://localhost:5000/api/theroadismine/user/currentuser/${id}`, editUser)
        .then(() => dispatch(getUsers()))
        message.success(" INFORMATION HAVE BEEN UPDATED SUCCESSFULLY!")
        .catch(err => console.log(err))
        message.error("OOOUUPS...SOMETHING WENT WRONG!")
}

//get all users
export const getUsers = () => (dispatch) => {
    axios.get("http://localhost:5000/api/theroadismine/user")
   
    .then(res => dispatch ({type: GET_USERS, payload:res.data}))
    .catch(err => console.log(err))
   
   }