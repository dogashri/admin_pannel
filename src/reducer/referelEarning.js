import {REFERRAL_EARNING_LOADED,REFERRAL_EARNING_ERROR} from '../actions/types'

const initialState = {
    total:0,
    referralEarning:[],
    pagenumber:1,
    referralEarningErrorMessage:null
}

export default function(state= initialState,action){
    const {type,payload} = action;
    switch(type){
        case REFERRAL_EARNING_LOADED:
            return{
                total:payload.totalReferral,
                referralEarning:payload.referralList
            }
        case REFERRAL_EARNING_ERROR:
            return{
                ...state,
                referralEarningErrorMessage:payload.referralEarningErrorMessage
            }
        default:
            return state;
    }
}