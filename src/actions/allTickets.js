import {ALL_TICKETS_LOADED,ALL_TICKETS_ERROR} from './types';
import axios from 'axios';

export const getAllTickets = (userID)=>async(dispatch,getState)=>{
    axios.get(`https://admindev.mobiuscrypto.io/api/v1/getalltickets/${userID}`,{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        }
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:ALL_TICKETS_LOADED,
                payload:{
                    allTickets:res.data.data,
                    total:res.data.total
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:ALL_TICKETS_ERROR,
            payload:{
                allTicketsErrorMessage:e
            }
        })
    })
}