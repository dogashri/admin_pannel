import {LOGIN_STARTED,LOGIN_SUCCESS,LOGIN_FAILED} from '../actions/types'

const initialState = {
    loading:false,
    token:null,
    email:null,
    loginErrorMessage:null,
    loggedIn:false
}

export default function(state=initialState,action){
    const{type,payload} = action;
    switch(type){
        case LOGIN_STARTED:
            return{...state,loading:true};

        case LOGIN_SUCCESS:
            return{...state,loggedIn:true,token:payload.token,email:payload.email};

        case LOGIN_FAILED:
            return{...state,loginErrorMessage:payload.message};
            
        default:
            return state
    }
}