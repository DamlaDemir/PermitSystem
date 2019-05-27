
import { Alert } from 'react-native';
import {USERNAME_CHANGED,PASSWORD_CHANGED,LOGIN_SUCCES,LOADING,SHOW_TOAST} from './types';
import NavigationService from '../navigation/NavigationServices';
import PermitSystemAPI from '../services/PermitSystemAPI';
import LocalStorageService from '../services/LocalStorageServices';
import StorageEnum from '../common/Enums/StorageEnum';

export const usernameChanged = (username) => {
    return(dispatch) => {
        dispatch({
            type: USERNAME_CHANGED,
            payload : username
        });
    }
};

export const passwordChanged = (password) => {
    return(dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload : password
        }); 
    }
};

 alertMessage = (title,message) => {
    Alert.alert(
        title,
        message,//mesaj içeriği
        [
            {text: 'Tamam', onPress: () => null } //üstünde tamam yazan buton çıkcak
        ]
    );
}

export const login = (data) => {
    return(dispatch) => {

        if(data.Username==='' || data.Password==='')
        {
            alertMessage('Mesaj','Her iki alanda dolu olmalı!');       
        }
        else{
            dispatch(loading(true));
            PermitSystemAPI.getToken(data) 
            .then(x => {
                dispatch(showToast(null , 'error'));
                console.log(x.data.access_token);
                LocalStorageService.setItemAsync(
                    StorageEnum.TOKEN,
                    x.data.access_token
                  );
                let loginRequest= {};
                loginRequest.Username=data.Username;
                PermitSystemAPI.postValue("api/Values/GetUser",loginRequest)
                .then(response  => {
                    if(response.data.Username != null){
                        LocalStorageService.setItemAsync(StorageEnum.USER, response.data);
                        loginSucces(dispatch);
                        dispatch(loading(false));
                    } 
                }).catch(err => {
                    debugger;
                    console.log(err);
                });
             
            }).catch(x => {
                debugger;
                //dispatch(showToast(x.response.data.error_description , 'error'));
                alertMessage('Mesaj','Kullanıcı adı veya şifre yanlış!');       
                dispatch(loading(false));

              });

        }



    }   
};

const loginSucces = (dispatch/*, user*/ ) => {
    dispatch({
        type:LOGIN_SUCCES,
        //payload:user
    });
    NavigationService.navigate('Home'/*, { userName: 'Lucy' }*/);
};


export const loading = bool => ({
    type: LOADING,
    payload: bool,
});

export const showToast = (message,messageType) => ({
    type: SHOW_TOAST,
    payload: {message,messageType},
});


