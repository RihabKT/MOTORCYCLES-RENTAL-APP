import { GET_PROFILES } from "../constants/actionTypes";
import axios from "axios";
import { message } from "antd";



export const getProfiles = (userId) => (dispatch) =>{
    axios.get(`http://localhost:5000/api/theroadismine/profile/${userId}`)
         .then(res =>dispatch({type: GET_PROFILES, payload:res.data}))
         
         .catch(err => console.log(err))
}


export const editUser = (userId,editUser) => (dispatch) => {
    axios.put( `http://localhost:5000/api/theroadismine/profile/${userId}`, editUser)
        .then(() => dispatch(getProfiles()))
       
        message.success(" INFORMATION HAVE BEEN UPDATED SUCCESSFULLY!")
        .catch(err => console.log(err))
        message.error("OOOUUPS...SOMETHING WENT WRONG!")
}