import {LOGIN_STARTED,LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT} from '../actions/types'

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
            return{loading:false,loggedIn:true,token:payload.token,email:payload.email,loginErrorMessage:null};

        case LOGIN_FAILED:
            return{...state,loading:false,loginErrorMessage:payload.message};

        case LOGOUT:
            localStorage.clear()
            return{
                ...initialState
            }
        default:
            return state
    }
}