import {LOGIN_STARTED,LOGIN_SUCCESS,LOGIN_FAILED} from './types';
import axios from 'axios';

export const login = (email,password)=>async(dispatch,getState)=>{
    console.log('function')
    const config = {
        headers:'application/json'
    }
    const body = JSON.stringify({email,password})
    dispatch({
        type:LOGIN_STARTED
    })
    await axios.post('https://admindev.mobiuscrypto.io/api/v1/login',{body,config},
    // {
    //     headers:{
    //         "authorization":localStorage.token
    //     }
    // }
    ).then((response)=>{
        console.log(response.data);
    },(error)=>{console.log(error)})
    .then(res=>dispatch({
        type:LOGIN_SUCCESS,
        payload:{
            token:res.data.token
        }
    }))
    .catch(()=>dispatch({
        type:LOGIN_FAILED,
        payload:{
            message:'wrong email or password'
        }
    }))
}