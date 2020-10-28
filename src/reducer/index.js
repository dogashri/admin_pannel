import {combineReducers} from 'redux';
import authentication from './authentication';
import users from './users';
import getCinema from './cinema';
import ticketByCinema from './ticketByCinema';
import transactionHistory from './transactionHistory';
import refrelEarning from './referelEarning';
import referralContacts from './referralContacts';
import allTickets from './allTickets';
import setting from './setting';

export default combineReducers({
    authentication,
    users,
    getCinema,
    ticketByCinema,
    transactionHistory,
    refrelEarning,
    referralContacts,
    allTickets,
    setting
})