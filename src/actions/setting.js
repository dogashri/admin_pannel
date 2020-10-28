import {SETTINGS_LOADED,SETTINGS_ERROR} from './types';
import axios from 'axios';

export const getSetting = ()=>async(dispatch,getState)=>{
    axios.get('https://admindev.mobiuscrypto.io/api/v1/settings',{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        } 
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:SETTINGS_LOADED,
                payload:{
                    settingData:res.data.data
                    // maxWithdrawl:res.data.data.maxWithdrawl,
                    // minAdminFund:res.data.data.minAdminFund,
                    // minDeposit:res.data.data.minDeposit,
                    // minWithdrawal:res.data.data.minWithdrawal,
                    // withdrawalFees:res.data.data.withdrawalFees
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:SETTINGS_ERROR,
            payload:{
                settingsErrorMessage:e
            }
        })
    })
}