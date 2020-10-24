import {CINEMA_LOADED,CINEMA_ERROR,CINEMA_CLEAR} from '../actions/types';

const initialState = {
    total:0,
    cinemaList:[],
    pagenumber:1,
    cinemaErrorMessage:null
}

export default function(state=initialState,action){
    const{type,payload} = action;
    switch(type){
        case CINEMA_LOADED:
            return{
                total:payload.total,
                cinemaList:payload.cinemaList
            }
        case CINEMA_ERROR:
            return{
                ...state,
                cinemaErrorMessage:payload.cinemaErrorMessage
            }
        case CINEMA_CLEAR:
            localStorage.clear()
            return{
                ...initialState
            }
        default:
            return state
    }
}