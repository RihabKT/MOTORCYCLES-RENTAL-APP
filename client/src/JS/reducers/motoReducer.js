import { GET_MOTO, GET_MOTOS, TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/actionTypes"



const initialState = {
    motos: [],
    motoId: {},
    isEdit: false
}

const motoReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_MOTOS:
            return {...state, motos:action.payload}

            case GET_MOTO:
                return {...state, motoId:action.payload}
                  
             case TOGGLE_TRUE:
                 return {...state, isEdit:true}
     
             case TOGGLE_FALSE:
                 return {...state, isEdit:false}

           


            default: return state;
    }

}


export default motoReducer;