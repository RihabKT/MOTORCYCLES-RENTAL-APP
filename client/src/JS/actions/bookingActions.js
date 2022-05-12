import axios from "axios";
import { message } from "antd";
import {GET_ALL_BOOKINGS, GET_BOOKING, GET_MY_BOOKINGS} from "../constants/actionTypes"




export const getBookings = () => (dispatch) => {
    axios.get("http://localhost:5000/api/theroadismine/booking/getAllBookings")
   

    
    .then(res => dispatch ({type: GET_ALL_BOOKINGS, payload:res.data}))
    
    .catch(err => console.log(err))
    
   
   }

   export const getMyBookings = (user) => (dispatch) => {
    axios.get(`http://localhost:5000/api/theroadismine/booking/getmybookings/${user}`)
   

    
    .then(res => dispatch ({type: GET_MY_BOOKINGS, payload:res.data}))
    
    .catch(err => console.log(err))
    
   
   }

   export const getbooking = (id) => (dispatch) => {
    axios.get(`http://localhost:5000/api/theroadismine/booking/${id}`)
   

    
    .then(res => dispatch ({type: GET_BOOKING, payload:res.data}))
    
    .catch(err => console.log(err))
    
   
   }


   export const deleteBooking = (id) => (dispatch) => {
    axios.delete(`http://localhost:5000/api/theroadismine/booking/${id}`)
        .then(() => dispatch(getBookings()))
        message.success("WELL DONE...THIS BOOKING HAS BEEN REMOVED SUCCESSFULLY!")
        .catch(err => console.log(err))
        message.error("OOOUUPS...SOMETHING WENT WRONG! PLEASE TRY AGAIN")
}