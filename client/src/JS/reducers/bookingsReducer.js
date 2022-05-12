
import { GET_ALL_BOOKINGS, GET_BOOKING, GET_MY_BOOKINGS } from "../constants/actionTypes";


const initialState = {
    bookings: [],
    booking:[],
    bookingId:{}
}

const bookingsReducer = (state=initialState, action) =>{
    switch(action.type){

        case GET_ALL_BOOKINGS:
            return {...state, bookings:action.payload}

        case GET_MY_BOOKINGS:
           return {...state, booking:action.payload}
         
           case GET_BOOKING:
                return {...state, bookingId:action.payload}

            default: return state;
    }

}


export default bookingsReducer;