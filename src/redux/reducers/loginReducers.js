
import {USERNAME_CHANGED,PASSWORD_CHANGED , LOADING,SHOW_TOAST} from '../actions/types';
const INITIAL_STATE = {
    username : '',
    password: '',
    loading:false,
    token: {},
    showToastMessage: null,
    showToastMesType: null

}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case USERNAME_CHANGED:
        return{...state,username:action.payload}
        
        case PASSWORD_CHANGED:
        return{...state,password:action.payload}

        case LOADING:
        return{...state,loading:action.payload}

        case SHOW_TOAST:
            return{...state,showToastMessage:action.payload.message,showToastMesType:action.payload.messageType}



        default:
        return state;
    }
}