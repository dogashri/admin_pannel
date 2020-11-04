import {LOGIN_STARTED,LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT,USERS_CLEAR} from './types';
import axios from 'axios';
import { toast } from 'react-toastify';
// import {useHistory} from 'react-router-dom';

export const login = (email,password)=>async(dispatch,getState)=>{
    // const history = useHistory()
    console.log(email,password)
    console.log('function')
    const config = {
        headers:{
            "content-type":["application/json"]
        }
    }
    const body = JSON.stringify({email,password})
    console.log(body)
    dispatch({
        type:LOGIN_STARTED
    })
    axios.post('https://admindev.mobiuscrypto.io/api/v1/login',body,config,
    {
        headers:{
            "x-auth-token":localStorage.token
        }
        
    }
    ).then((res)=>{
        console.log(res.data);
        if(res.data.success){
            toast.success("Login Successful", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
            });
            setTimeout(() => {
            }, 3000)
            dispatch({
                type:LOGIN_SUCCESS,
                payload:{
                    token:res.data.token
                }
        })
            // localStorage.setItem('x-auth-token',res.data.token)
        }
        else{
            toast.error("invalid credentials", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
            })
            dispatch({
                type:LOGIN_FAILED,
                payload:{
                    message:'wrong email or pass'
                }
            })
        }
    },(error)=>{console.log(error)})
}

export const logout=()=>dispatch=>{
    dispatch({type:LOGOUT})
    dispatch({type:USERS_CLEAR})
}
