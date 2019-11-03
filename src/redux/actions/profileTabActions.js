import {
    SET_NAME,
    SET_LASTNAME,
    SET_USERNAME,
    SET_PASSWORD,
    SET_GSM1,
    SET_GSM2,
    SET_EMAIL,
    SET_ADDRESS,
    SET_STARTDATE, 
    PROFILE_LOADING
} from './types';
import DropDownAlertServices from '../../services/DropdownAlertServices';
import LocalStorageService from '../../services/LocalStorageServices';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import StorageEnum from '../../common/Enums/StorageEnum';
import Constant from '../../common/constant';
import strings from '../../assets/strings/strings';

export const setName = (name) => {
    return(dispatch) => {
        dispatch({
            type: SET_NAME,
            payload: name
        });

    }
}

export const setLastName = (lastname) => {
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
    return(dispatch) => {
        dispatch({
            type: SET_GSM1,
            payload: gsm1
        });

    }
}

export const setGsm2 = (gsm2) => {
    return(dispatch) => {
        dispatch({
            type: SET_GSM2,
            payload: gsm2
        });

    }
}

export const setEmail = (email) => {
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

export const profileLoading = bool => ({
    type: PROFILE_LOADING,
    payload: bool,
});

export const updateProfile = (userRequest) => {
    return(dispatch) => {
        dispatch(profileLoading(true));
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            userRequest.Id = user.value.Id;
            PermitSystemAPI.postValue("api/Values/UpdateProfile", userRequest, response => {
                dispatch(profileLoading(false));
                DropDownAlertServices.alert(
                    Constant.msgType.success,
                    strings.LABEL.BASARILI,
                    strings.MSG.GUNCELLEME_BASARILI,
                    Constant.MESSAGE_DURATION
                  ); 
        }, err => {
            dispatch(profileLoading(false));
            DropDownAlertServices.alert(
                Constant.msgType.error,
                strings.LABEL.HATA,
                strings.MSG.HATA_OLUSTU,
                Constant.MESSAGE_DURATION
              ); 
        });
    });
 }
}


export const getProfileInfo = () => {
    return(dispatch) => {
        dispatch(profileLoading(true));
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            let ProfileRequest = { Username: user.value.Username };
            PermitSystemAPI.postValue("api/Values/GetProfileInfo", ProfileRequest, response => {
               dispatch(setName(response.data.Firstname));
               dispatch(setLastName(response.data.Lastname));
               dispatch(setUserName(response.data.Username));
               dispatch(setPassword(response.data.Password));
               dispatch(setGsm1(response.data.Phone));
               dispatch(setGsm2(response.data.Phone2));
               dispatch(setEmail(response.data.Email));
               dispatch(setAddress(response.data.Address));
               dispatch(setStartdate(response.data.Startdate));        
               dispatch(profileLoading(false));    
            }, err => {
                dispatch(profileLoading(false)); 
                DropDownAlertServices.alert(
                    Constant.msgType.error,
                    strings.LABEL.HATA,
                    strings.MSG.HATA_OLUSTU,
                    Constant.MESSAGE_DURATION
                  ); 
            });
        });
    }
}