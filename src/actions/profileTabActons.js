import {SET_NAME,SET_LASTNAME,SET_USERNAME,SET_PASSWORD,SET_GSM1,SET_GSM2,SET_EMAIL,SET_ADDRESS,SET_STARTDATE, SAVE_PROFILE_CLICK} from './types';

export const setName = (name) => {
    return(dispatch) => {
        dispatch({
            type: SET_NAME,
            payload: name
        });

    }
}

export const setLastName = (lastname) => {
    console.log(lastname);
    return(dispatch) => {
        dispatch({
            type: SET_LASTNAME,
            payload: lastname
        });

    }
}

export const setUserName = (username) => {
    return(dispatch) => {
        dispatch({
            type: SET_USERNAME,
            payload: username
        });

    }
}

export const setPassword = (password) => {
    console.log(password);
    return(dispatch) => {
        dispatch({
            type: SET_PASSWORD,
            payload: password
        });

    }
}

export const setGsm1 = (gsm1) => {
    console.log(gsm1);
    return(dispatch) => {
        dispatch({
            type: SET_GSM1,
            payload: gsm1
        });

    }
}

export const setGsm2 = (gsm2) => {
    console.log(gsm2);
    return(dispatch) => {
        dispatch({
            type: SET_GSM2,
            payload: gsm2
        });

    }
}

export const setEmail = (email) => {
    console.log(email);
    return(dispatch) => {
        dispatch({
            type: SET_EMAIL,
            payload: email
        });

    }
}

export const setAddress = (address) => {
    return(dispatch) => {
        dispatch({
            type: SET_ADDRESS,
            payload: address
        });

    }
}

export const setStartdate = (startdate) => {
    return(dispatch) => {
        dispatch({
            type: SET_STARTDATE,
            payload: startdate
        });

    }
}

export const saveProfile = (profileParameters) => {
    return(dispatch) => {
        dispatch({
            type: SAVE_PROFILE_CLICK
        });

        /*
        if(profileParameters == null)
        {
            //parametrede eksik varsa fail ver alert bas
        }
        else{
           // servise çıkılcak başarılıysa 
        }*/
    }
}