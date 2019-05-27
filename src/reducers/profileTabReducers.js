import { SET_NAME, SET_LASTNAME, SET_USERNAME, SET_PASSWORD, SET_GSM1, SET_GSM2, SET_EMAIL, SET_ADDRESS, SAVE_PROFILE_CLICK } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    lastname: '',
    username: '',
    password: '',
    gsm1: '',
    gsm2: '',
    email: '',
    address: ''
}


export default (state = INITIAL_STATE, action) => {
    debugger;
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload }

        case SET_LASTNAME:
            return { ...state, lastname: action.payload }

        case SET_USERNAME:
            return { ...state, username: action.payload }

        case SET_PASSWORD:
            return { ...state, password: action.payload }

        case SET_GSM1:
            return { ...state, gsm1: action.payload }

        case SET_GSM2:
            return { ...state, gsm2: action.payload }

        case SET_EMAIL:
            return { ...state, email: action.payload }

        case SET_ADDRESS:
            return { ...state, address: action.payload }

            case SAVE_PROFILE_CLICK:
        return{...state,isLoading:true}      

        default:
            return state;
    }
}