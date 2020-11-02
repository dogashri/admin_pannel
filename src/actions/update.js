import {UPDATE_INITIATED,UPDATE_INITIATION_ERROR, UPDATE_DONE,UPDATE_ERROR} from './types';
import axios from 'axios';
import {getSetting} from './setting';

export const getUpdate = (data,id,operation)=>async(dispatch,getState)=>{
    const config = {
        headers:{
            "content-type":["application/json"],
            'Authorization':`bearer ${getState().authentication.token}`
        }
    }
    const body = JSON.stringify({data,id,operation})
    console.log('update is running')
    axios.post('https://admindev.mobiuscrypto.io/api/v1/update',body,config)
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:UPDATE_INITIATED,
                payload:{
                    operationId:res.data.operationId,
                    message:res.data.message
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:UPDATE_INITIATION_ERROR,
            payload:{
                updateErrorMessage:e
            }
        })
    })
}

export const confirmUpdate = (operationID,otp)=>async(dispatch,getState)=>{
    const config = {
        headers:{
            "content-type":["application/json"],
            'Authorization':`bearer ${getState().authentication.token}`
        }
    }
    const body = {operationID,otp}
    axios.put(`https://admindev.mobiuscrypto.io/api/v1/updateconfirmation/${operationID}/${otp}`,body,config)
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:UPDATE_DONE,
                payload:{
                    message:res.data.message
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:UPDATE_ERROR,
            payload:{
                updateErrorMessage:e
            }
        })
    })
    .finally(()=>dispatch(getSetting()))
}