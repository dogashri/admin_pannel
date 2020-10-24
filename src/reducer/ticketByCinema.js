import {TICKETS_LOADED,TICKETS_CLEAR,TICKETS_ERROR} from '../actions/types';

const initialState = {
    total:0,
    ticketsList:[],
    pagenumber:1,
    ticketsErrorMessage:null
}

export default function(state=initialState,action){
    const{type,payload} = action;
    switch(type){
        case TICKETS_LOADED:
            return{
                total:payload.total,
                ticketsList:payload.ticketsList
            }
        case TICKETS_ERROR:
            return{
                ...state,
                cinemaErrorMessage:payload.cinemaErrorMessage
            }
        case TICKETS_CLEAR:
            localStorage.clear()
            return{
                ...initialState
            }
        default:
            return state
    }
}