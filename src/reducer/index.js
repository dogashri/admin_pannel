import {combineReducers} from 'redux';
import authentication from './authentication';
import users from './users';
import getCinema from './cinema';
import ticketByCinema from './ticketByCinema';

export default combineReducers({
    authentication,
    users,
    getCinema,
    ticketByCinema
})