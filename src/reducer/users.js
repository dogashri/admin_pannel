import {USERS_LOADED,USERS_ERROR,USERS_CLEAR} from '../actions/types';

const initialState = {
    total:0,
    usersList:[],
    pageNumber:1,
    perPage:10,
    userErrorMessage:null
}

export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case USERS_LOADED:
            return{
                total:payload.total,
                usersList:payload.usersList,
                pageNumber:payload.pageNumber,
                perPage:payload.perPage,
                userErrorMessage:null
            }
        case USERS_ERROR:
            return{
                ...state,
                userErrorMessage:payload.userErrorMessage
            }
        case USERS_CLEAR:
            localStorage.clear()
            return{
                ...initialState
            }
        default:
            return state
    }
}