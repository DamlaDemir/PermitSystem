import { 
    FILL_PERMIT_LIST,
    SELECT_PERSONEL_PICKER_CHECKED,
    FILTER_LOADING,
    FILL_PERSONEL_LIST
 } from './types';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import LocalStorageService from '../../services/LocalStorageServices';
import DropDownAlertServices from '../../services/DropdownAlertServices';
import Base from '../../common/Base/index';
import StorageEnum from '../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../common/Enums/PermitTypeEnum';
import NavigationService from '../../navigation/NavigationServices';
import Constant from '../../common/constant';
import strings from '../../assets/strings/strings';

export const selectPersonelPickerChecked = (pickerValue) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_PERSONEL_PICKER_CHECKED,
            payload: pickerValue
        });
    }
}

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
            dispatch(filterLoading(true));
            LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
                if (!user.value.IsAdmin) {
                    permitRequest.UserId = user.value.Id;
                } 
            
                PermitSystemAPI.postValue("api/Values/GetPermits",permitRequest, response => {
                    var list = setDataArray(response,user);
                    dispatch(fillPermitList(list)); 
                    dispatch(filterLoading(false));
                    // NavigationService.navigate('Damla');
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
        var permitType = permit.PermitType;
        var permitObj = {};
        permitObj.title = user.value.IsAdmin ? permit.PersonelFirstName + " " + permit.PersonelLastName :
         permitType  == PermitTypeEnum.YILLIK ? "YILLIK İZİN" : "DOĞUM İZNİ";
        permitObj.content = {
            PermitNo: permit.PermitNo,
            PermitType: permitType,
            StartDate: permit.StartDate,
            EndDate: permit.EndDate,
            Reason: permit.Reason,
            ReqeuestDate: permit.ReqeuestDate,
            Status: permit.Status
        };
        permitList.push(permitObj);
    });
    return permitList;
}

const filterValidation = (permitRequest) => {
    if(permitRequest.EndDate == null && permitRequest.StartDate == null && permitRequest.PermitStatus == "" && permitRequest.UserId == ""){
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


