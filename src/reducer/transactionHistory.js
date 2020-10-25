import {TRANSACTION_LOADED,TRANSACTION_CLEAR,TRANSACTION_ERROR} from '../actions/types';

const initialState = {
    total:0,
    transactions:[],
    pageNumber:1,
    transactionErrorMessage:null
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case TRANSACTION_LOADED:
            return{
              total:payload.total,
              transactions:payload.transactions  
            }
        case TRANSACTION_ERROR:
            return{
                ...state,
                transactionErrorMessage:payload.transactionErrorMessage
            }
            default:
                return state
                
    }
}