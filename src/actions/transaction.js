import {TRANSACTION_LOADED,TRANSACTION_ERROR} from './types';
import axios from 'axios';

export const getTransaction = (value,userID,pageNumber=1,perPage=10)=>async(dispatch,getState)=>{
    axios.get(`https://admindev.mobiuscrypto.io/api/v1/gettransaction/${value}/${pageNumber}/${perPage}/${userID}`,{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        }
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:TRANSACTION_LOADED,
                payload:{
                    total:res.data.total,
                    transactions:res.data.transactions
                }
            })
        }
    })
    .catch((e)=>{
        dispatch({
            type:TRANSACTION_ERROR,
            payload:{
                transactionErrorMessage:e
            }
        })
    })
}