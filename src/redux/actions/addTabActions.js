import { 
    SET_EXPLANATION,
    ADDPERMIT_LOADING,
    LOAD_PERMIT_LIST,
    SET_PERMIT_NO,
    SET_REQUEST_DATE,
    ADD_PERMIT_SET_STATUS
 } from './types';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import LocalStorageService from '../../services/LocalStorageServices';
import Base from '../../common/Base/index';
import StorageEnum from '../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../common/Enums/PermitTypeEnum';
import DropDownAlertServices from '../../services/DropdownAlertServices';
import Constant from '../../common/constant';
import strings from '../../assets/strings/strings';
import {loadPermitList} from '../actions';
// export const clickDatetimePicker = ({ stateName, selectedDtp }) => {
//     console.log("clickdatetimepicker");
//     return (dispatch) => {
//         dispatch({
//             type: DATETIME_CLICK,
//             payload: { stateName, selectedDtp }
//         });
//     }
// }


// export const cancelDatetimePicker = (selectedDtp) => {
//     console.log("canceldatetimepicker");
//     return (dispatch) => {
//         dispatch({
//             type: DATETIME_CANCEL,
//             payload: selectedDtp
//         });
//     }
// }

// export const setDateTime = ({ stateName, datetime, isSelected, selectedDtp }) => {
//     console.log("setDateTime:", datetime);
//     return (dispatch) => {
//         dispatch({
//             type: DATETIME_SET,
//             payload: { stateName, datetime, isSelected, selectedDtp }
//         });

//     }
// }

// export const selectPickerChecked = (pickerValue) => {
//     return (dispatch) => {
//         dispatch({
//             type: SELECT_PICKER_CHECKED,
//             payload: pickerValue
//         });
//     }
// }
export const setPermitNo = (permitNo) => {
    return (dispatch) => {
        dispatch({
            type: SET_PERMIT_NO,
            payload: permitNo
        });
    }
}

export const setRequestDate = (date) => {
    return (dispatch) => {
        dispatch({
            type: SET_REQUEST_DATE,
            payload: date
        });

    }
}

export const setPermitStatus = (statu) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PERMIT_SET_STATUS,
            payload: statu
        });

    }
}

export const setExplanation = (explanation) => {
    return (dispatch) => {
        dispatch({
            type: SET_EXPLANATION,
            payload: explanation
        });

    }
}

export const AddPermitLoading = bool => ({
    type: ADDPERMIT_LOADING,
    payload: bool,
});



export const AddOrUpdatePermit = (permitParameters) => {
    return (dispatch) => {
        if(permitValidation(permitParameters)){
            dispatch(AddPermitLoading(true));
            PermitSystemAPI.postValue("api/Values/AddOrUpdatePermit", permitParameters, response => {
                if(response.data.status){
                    dispatch(AddPermitLoading(false));
                    DropDownAlertServices.alert(
                        Constant.msgType.success,
                        strings.LABEL.BASARILI,
                        strings.MSG.IZIN_TALEBI_BASARILI,
                        Constant.MESSAGE_DURATION
                      );
                    dispatch(loadPermitList(true)); //liste sayfasının yenilenmesi için
                }
                else {
                    dispatch(AddPermitLoading(false));
                    DropDownAlertServices.alert(
                        Constant.msgType.error,
                        strings.LABEL.HATA,
                        response.data.message,
                        Constant.MESSAGE_DURATION
                      );
                }   
            }, err => {
                dispatch(AddPermitLoading(false));
                DropDownAlertServices.alert(
                    Constant.msgType.error,
                    strings.LABEL.HATA,
                    response.data.message,
                    Constant.MESSAGE_DURATION
                  );
            });
        }            
    }
}

permitValidation = (permitParameters) => {
if(permitParameters.StartDate === null && permitParameters.EndDate === null && 
    permitParameters.AnnualType_sno === -1 && permitParameters.Reason === ""){
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
