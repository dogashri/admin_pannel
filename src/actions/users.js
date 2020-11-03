import axios from 'axios';
import {USER_LOAD_STARTED,USERS_LOADED,USERS_ERROR,USERS_CLEAR} from './types';

export const loadUser = (pageNumber,perPage)=>async(dispatch,getState)=>{
    dispatch({
        type:USER_LOAD_STARTED
    })
    await axios.get('https://admindev.mobiuscrypto.io/api/v1/getusers',{
        params:{pageNumber,perPage},
        headers:{
        'Authorization':`bearer ${getState().authentication.token}`
    }})
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:USERS_LOADED,
                payload:{
                    total:res.data.totalUsers,
                    usersList:res.data.users
                }
            })
        }
    }).catch((e)=>dispatch({
        type:USERS_ERROR,
        payload:{
            userErrorMessage:e
        }
    }))
}