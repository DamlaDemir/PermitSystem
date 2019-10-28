
import {USERNAME_CHANGED,PASSWORD_CHANGED , LOGIN_LOADING} from '../actions/types';
const INITIAL_STATE = {
    username : '',
    password: '',
    loginLoading:false,
    token: {},

}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case USERNAME_CHANGED:
        return{...state,username:action.payload}
        
        case PASSWORD_CHANGED:
        return{...state,password:action.payload}

        case LOGIN_LOADING:
        return{...state,loginLoading:action.payload}

        default:
        return state;
    }
}