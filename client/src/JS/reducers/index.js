
import {combineReducers} from "redux";
import motoReducer from "./motoReducer";
import userReducer from "./userReducer";
import bookingsReducer from "./bookingsReducer";



const rootReducer = combineReducers({motoReducer, userReducer, bookingsReducer});

export default rootReducer;