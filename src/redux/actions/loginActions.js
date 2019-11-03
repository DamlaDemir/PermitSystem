
import { USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCES, LOGIN_LOADING } from './types';
import NavigationService from '../../services/NavigationServices';
import DropDownAlertServices from '../../services/DropdownAlertServices';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import LocalStorageService from '../../services/LocalStorageServices';
import StorageEnum from '../../common/Enums/StorageEnum';
import Constant from '../../common/constant';
import strings from '../../assets/strings/strings';

export const usernameChanged = (username) => {
    return (dispatch) => {
        dispatch({
            type: USERNAME_CHANGED,
            payload: username
        });
    }
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    }
};
export const loginLoading = bool => ({
    type: LOGIN_LOADING,
    payload: bool,
});

export const login = (data) => {
    return (dispatch) => {

        if (loginValidation(data)) {
            dispatch(loginLoading(true));
            PermitSystemAPI.getToken(data)
                .then(x => {
                    LocalStorageService.setItemAsync(
                        StorageEnum.TOKEN,
                        x.data.access_token
                    );
                    let loginRequest = {};
                    loginRequest.Username = data.Username;
                    PermitSystemAPI.postValue("api/Values/GetUser", loginRequest, response => {
                        if (response.data.Username != null) {
                            LocalStorageService.setItemAsync(StorageEnum.USER, response.data);
                            dispatch(loginLoading(false));
                            NavigationService.navigate('Home'/*, { userName: 'Lucy' }*/);
                        }else{
                            DropDownAlertServices.alert(
                                Constant.msgType.error,
                                strings.LABEL.HATA,
                                strings.MSG.KULLANICI_BULUNAMADI_HATA,
                                Constant.MESSAGE_DURATION
                              );                        
                            dispatch(loginLoading(false));
                        }
                    }, err => {
                        DropDownAlertServices.alert(
                            Constant.msgType.error,
                            strings.LABEL.HATA,
                            strings.MSG.HATA_OLUSTU,
                            Constant.MESSAGE_DURATION
                          );  
                        dispatch(loginLoading(false));
                    });

                }).catch(x => {
                    DropDownAlertServices.alert(
                        Constant.msgType.error,
                        strings.LABEL.HATA,
                        strings.MSG.KULLANICI_BILGILERI_YALNIS,
                        Constant.MESSAGE_DURATION
                      );  
                    dispatch(loginLoading(false));
                });
        }
    }
};

const loginValidation = (data) => {
    const {Username, Password} = data;
    if (Username === '' || Password === '') {
        DropDownAlertServices.alert(
            Constant.msgType.warning,
            strings.LABEL.UYARI,
            strings.MSG.ALANLAR_BOS_GECILEMEZ,
            Constant.MESSAGE_DURATION
          );  
          return false;
    }
    return true;
}




