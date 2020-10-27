import {ALL_TICKETS_LOADED,ALL_TICKETS_ERROR} from '../actions/types';

const initialState={
    total:0,
    allTickets:[],
    pageNumber:1,
    allTicketsErrorMessage:null
}

export default function(state=initialState,action){
    const{type,payload} = action;
    switch(type){
        case ALL_TICKETS_LOADED:
            return{
                total:payload.total,
                allTickets:payload.allTickets
            }
        case ALL_TICKETS_ERROR:
            return{
                ...state,
                allTicketsErrorMessage:payload.allTicketsErrorMessage
            }
        default:
            return state;
    }
}