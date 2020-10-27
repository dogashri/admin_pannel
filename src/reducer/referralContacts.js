import {REFERRAL_CONTACTS_LOADED,REFERRAL_CONTACTS_ERROR} from '../actions/types';

const initialState={
    total:0,
    contacts:[],
    pageNumber:1,
    contactsErrorMessage:null
}

export default function(state=initialState,action){
    const{type,payload} = action;
    switch(type){
        case REFERRAL_CONTACTS_LOADED:
            return{
                total:payload.total,
                contacts:payload.contacts
            }
        case REFERRAL_CONTACTS_ERROR:
            return{
                ...state,
                contactsErrorMessage:payload.contactsErrorMessage
            }
        default:
            return state;
    }
}