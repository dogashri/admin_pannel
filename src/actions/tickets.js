import {TICKETS_LOADED,TICKETS_ERROR,TICKETS_CLEAR} from './types';
import axios from 'axios';

export const getTicketByCinema = (cinemaId)=>async(dispatch,getState)=>{
    console.log(cinemaId)
    await axios.get(`https://admindev.mobiuscrypto.io/api/v1/getticketbycinema?cinemaId=${cinemaId}`,{
        headers:{
            'Authorization':`bearer ${getState().authentication.token}`
        }
    })
    .then((res)=>{
        if(res.data.success){
            dispatch({
                type:TICKETS_LOADED,
                payload:{
                    total:res.data.totalTickets,
                    ticketsList:res.data.tickets
                }
            })
        }
    }).catch((e)=>{
        dispatch({
            type:TICKETS_ERROR,
            payload:{
                ticketsErrormessage:e
            }
        })
    })
}