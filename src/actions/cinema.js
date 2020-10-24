import {CINEMA_ERROR,CINEMA_LOADED,CINEMA_CLEAR} from './types';
import axios from 'axios';

export const getCinema = ()=>async(dispatch,getState)=>{
    await axios.get('https://admindev.mobiuscrypto.io/api/v1/getallcinema',{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        }
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:CINEMA_LOADED,
                payload:{
                    total:res.data.no,
                    cinemaList:res.data.data
                }
            })
        }
    }).catch((e)=>dispatch({
        type:CINEMA_ERROR,
        payload:{
            cinemaErrorMessage:e
        }
    }))
}

// get ticket by cinema

