import { GET_MOTO, GET_MOTOS, TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/actionTypes"
import axios from "axios";
import { message } from "antd";


export const getMotos = () => (dispatch) => {
 axios.get("http://localhost:5000/api/theroadismine/moto")

 .then(res => dispatch ({type: GET_MOTOS, payload:res.data}))
 .catch(err => console.log(err))

}

export const getMoto= (id) => (dispatch) =>{
    axios.get(`http://localhost:5000/api/theroadismine/moto/${id}`)
         .then(res =>dispatch({type: GET_MOTO, payload:res.data}))
         .catch(err => console.log(err))
}

export const addMoto = (newMoto) => (dispatch) => {
    axios.post('http://localhost:5000/api/theroadismine/moto/',newMoto)
        .then(() => dispatch(getMotos()))
        message.success("WELL DONE...A NEW MOTORCYCLE HAS BEEN ADDED SUCCESSFULLY!")
        .catch(err => console.log(err))
        message.error("OOOUUPS...SOMETHING WENT WRONG! PLEASE TRY AGAIN")
}

export const deleteMoto = (id) => (dispatch) => {
    axios.delete(`http://localhost:5000/api/theroadismine/moto/${id}`)
        .then(() => dispatch(getMotos()))
        message.success("WELL DONE...THIS MOTORCYCLE HAS BEEN REMOVED SUCCESSFULLY!")
        .catch(err => console.log(err))
        message.error("OOOUUPS...SOMETHING WENT WRONG! PLEASE TRY AGAIN")
}

export const editMoto = (id, editMoto) => (dispatch) => {
    axios.put(`http://localhost:5000/api/theroadismine/moto/${id}`,editMoto)
        .then(() => dispatch(getMotos()))
        message.success("WELL DONE...THIS MOTORCYCLE HAS BEEN UPDATED SUCCESSFULLY!")
        .catch(err => console.log(err))
        message.error("OOOUUPS...SOMETHING WENT WRONG! PLEASE TRY AGAIN")
}

export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }
}

export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE
    }
}
