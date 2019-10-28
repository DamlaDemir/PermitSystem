
import {combineReducers} from 'redux';
import loginReducers from './loginReducers';
import addTabReducers from './addTabReducers';
import profileTabReducers from './profileTabReducers';
import listTabReducers from './listTabReducers';


export default combineReducers({
    loginResponse:loginReducers,
    addTabResponse: addTabReducers,
    profileTabResponse: profileTabReducers,
    listTabResponse : listTabReducers
});