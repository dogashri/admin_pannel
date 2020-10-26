import {REFERRAL_EARNING_LOADED,REFERRAL_EARNING_ERROR} from './types';
import axios from 'axios';

export const getReferralEarning = (userID,pageNumber,perPage)=>async(dispatch,getState)=>{
    axios.get(`https://admindev.mobiuscrypto.io/api/v1/getreferral/${userID}/${pageNumber}/${perPage}`,{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        }
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:REFERRAL_EARNING_LOADED,
                payload:{
                    referralList:res.data.referralList,
                    totalReferral:res.data.totalReferral
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:REFERRAL_EARNING_ERROR,
            payload:{
                referralErrorMessage:e
            }
        })
    })
}