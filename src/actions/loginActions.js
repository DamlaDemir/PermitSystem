
import { Alert } from 'react-native';
import {USERNAME_CHANGED,PASSWORD_CHANGED,LOGIN_CLICK,LOGIN_SUCCES} from './types';
import NavigationService from '../navigation/NavigationServices';


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

export const login = ({username,password}) => {
    debugger;
    return(dispatch) => {
        dispatch({
            type: LOGIN_CLICK
        }); 
/*
        console.log("login click içindeki username:"+username);
        console.log("login click içindeki password:"+password);
        if(username==='' || password==='')
        {
            Alert.alert(
                'Mesaj',
                'Her iki alanda dolu olmalı!',//mesaj içeriği
                [
                    {text: 'Tamam', onPress: () => null } //üstünde tamam yazan buton çıkcak
                ]
            );
        }
        else{
           // servise çıkılcak başarılıysa user bilgisi dönülcek
        }*/

        loginSucces(dispatch);


    }   
};

const loginSucces = (dispatch/*, user*/ ) => {
    dispatch({
        type:LOGIN_SUCCES,
        //payload:user
    });
    console.log("başarılı giriş");
    NavigationService.navigate('Home'/*, { userName: 'Lucy' }*/);
};