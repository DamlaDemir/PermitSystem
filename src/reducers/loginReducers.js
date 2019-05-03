
import {USERNAME_CHANGED,PASSWORD_CHANGED ,LOGIN_CLICK, LOGIN_SUCCES} from '../actions/types';
const INITIAL_STATE = {
    username : '',
    password: '',
    loading:false
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case USERNAME_CHANGED:
        return{...state,username:action.payload}
        
        case PASSWORD_CHANGED:
        return{...state,password:action.payload}

        case LOGIN_CLICK:
        return{...state,loading:true}

        case LOGIN_SUCCES:
        return{...state,loading:false}

        default:
        return state;
    }
}