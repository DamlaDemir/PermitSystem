
import {combineReducers} from 'redux';
import loginReducers from './loginReducers';
import addTabReducers from './addTabReducers';

export default combineReducers({
    loginResponse:loginReducers,
    addTabResponse: addTabReducers
});