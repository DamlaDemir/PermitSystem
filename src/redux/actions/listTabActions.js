import { 
    FILL_PERMIT_LIST,
    FILTER_LOADING,
    FILL_PERSONEL_LIST,
    LOAD_PERMIT_LIST
 } from './types';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import LocalStorageService from '../../services/LocalStorageServices';
import DropDownAlertServices from '../../services/DropdownAlertServices';
import Base from '../../common/Base/index';
import StorageEnum from '../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../common/Enums/PermitTypeEnum';
import NavigationService from '../../services/NavigationServices';
import Constant from '../../common/constant';
import strings from '../../assets/strings/strings';
import {loadPermitList} from '../actions';
import moment from 'moment';

export const fillPermitList = (permitList) => ({
    type: FILL_PERMIT_LIST,
    payload: permitList,
});

export const fillPersonelList = (personelList) => ({
    type: FILL_PERSONEL_LIST,
    payload: personelList,
});

export const filterLoading = bool => ({
    type: FILTER_LOADING,
    payload: bool,
});



export const getPersonelList = () => {
    return (dispatch) => {
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            if (user.value.IsAdmin) {             
                var objList = [];
                objList.push({ label:"Personel Seçiniz", value:-1 })
                PermitSystemAPI.getValue("api/Values/GetUsers", response => {
                response.data.forEach(item => {
                   var obj = {
                       label : item.Firstname + " " +  item.Lastname,
                       value : item.Id
                    }
                    objList.push(obj);
               });
               
               dispatch(fillPersonelList(objList));          
               }, err => {
                DropDownAlertServices.alert(
                    Constant.msgType.error,
                    strings.LABEL.HATA,
                    strings.MSG.HATA_OLUSTU,
                    Constant.MESSAGE_DURATION
                  ); 
               });
            } 
        });
    }
}


export const getPermitList = (permitRequest) => {
    return (dispatch) => {
        if(filterValidation(permitRequest)){
            dispatch(loadPermitList(false));
            dispatch(filterLoading(true));
            LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
                if (!user.value.IsAdmin) {
                    permitRequest.UserId = user.value.Id;
                } 
            
                PermitSystemAPI.postValue("api/Values/GetPermits",permitRequest, response => {
                    var list = setDataArray(response,user);
                    dispatch(fillPermitList(list)); 
                    dispatch(filterLoading(false));
                    // NavigationService.navigate('ListTab');
                }, err => {
                    dispatch(filterLoading(false));
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
}

 const setDataArray = (response,user) =>{
    var permitList = [];
    response.data.forEach(permit => {
        var permitObj = {
            Title: user.value.IsAdmin ? permit.PersonelFirstName + " " + permit.PersonelLastName : 
            moment(permit.StartDate).format('DD.MM.YYYY') + "-" + moment(permit.EndDate).format('DD.MM.YYYY'),
            PermitNo: permit.PermitNo,
            PermitType: permit.PermitType,
            StartDate: permit.StartDate,
            EndDate: permit.EndDate,
            Reason: permit.Reason,
            RequestDate: permit.RequestDate,
            Status: permit.Status,
            PersonnelNo : permit.Personnel_sno
        };
        permitList.push(permitObj);
    });
    return permitList;
}

const filterValidation = (permitRequest) => {
    if(permitRequest.EndDate === null && permitRequest.StartDate === null && permitRequest.PermitStatus === -1 && permitRequest.UserId === -1){
        DropDownAlertServices.alert(
            Constant.msgType.warning,
            strings.LABEL.UYARI,
            strings.MSG.EN_AZ_BIR_ALAN_SECINIZ,
            Constant.MESSAGE_DURATION
          ); 
          return false;
    }
    return true;
}


