import {UPDATE_INITIATED,UPDATE_INITIATION_ERROR, UPDATE_DONE,UPDATE_ERROR} from '../actions/types';

const initialState = {
    loading:false,
    operationId:null,
    message:null,
    updateErrorMessage:null
}

export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case UPDATE_INITIATED:
            return{
                loading:true,
                operationId:payload.operationId,
                message:payload.message
            }
        case UPDATE_INITIATION_ERROR:
            return{
                ...state,
                updateErrorMessage:payload.updateErrorMessage
            }
        case UPDATE_DONE:
            return{
                ...state,
                loading:false,
                message:payload.message
            }
        case UPDATE_ERROR:
            return{
                ...state,
                message:payload.message
            }
        default:
            return state;
    }
}