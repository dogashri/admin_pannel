import {SETTINGS_LOADED,SETTINGS_ERROR} from '../actions/types';

const initialState = {
    settingData:[],
    // maxWithdrawl:[],
    // minAdminFund:[],
    // minDeposit:[],
    // minWithdrawal:[],
    // withdrawalFees:[],
    ticketsErrorMessage:null
}

export default function(state = initialState,action){
    const{type,payload} = action;
    switch(type){
        case SETTINGS_LOADED:
            return{
                settingData:payload.settingData
                // maxWithdrawl:payload.maxWithdrawl,
                // minAdminFund:payload.minAdminFund,
                // minDeposit:payload.minDeposit,
                // minWithdrawal:payload.minWithdrawal,
                // withdrawalFees:payload.withdrawalFees,
            }
        case SETTINGS_ERROR:
            return{
                ...state,
                ticketsErrorMessage:payload.ticketsErrorMessage
            }
        default:
            return state
    }
}