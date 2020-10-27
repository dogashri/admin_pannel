import {REFERRAL_CONTACTS_LOADED,REFERRAL_CONTACTS_ERROR} from './types';
import axios from 'axios';

export const getReferralContacts = (userID,pageNumber,perPage)=>async(dispatch,getState)=>{
    axios.get(`https://admindev.mobiuscrypto.io/api/v1/getreferralcontacts/${userID}/${pageNumber}/${perPage}`,{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        }
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:REFERRAL_CONTACTS_LOADED,
                payload:{
                    contacts:res.data.contacts,
                    total:res.data.total
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:REFERRAL_CONTACTS_ERROR,
            payload:{
                contactsErrorMessage:e
            }
        })
    })
}