import { 
    DATETIME_CLICK, 
    DATETIME_CANCEL, 
    DATETIME_SET, 
    SELECT_PICKER_CHECKED, 
    SET_EXPLANATION,
    ADDPERMIT_LOADING,
    LOAD_PERMIT_LIST,
 } from './types';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import LocalStorageService from '../../services/LocalStorageServices';
import Base from '../../common/Base/index';
import StorageEnum from '../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../common/Enums/PermitTypeEnum';

export const clickDatetimePicker = ({ stateName, selectedDtp }) => {
    console.log("clickdatetimepicker");
    return (dispatch) => {
        dispatch({
            type: DATETIME_CLICK,
            payload: { stateName, selectedDtp }
        });
    }
}


export const cancelDatetimePicker = (selectedDtp) => {
    console.log("canceldatetimepicker");
    return (dispatch) => {
        dispatch({
            type: DATETIME_CANCEL,
            payload: selectedDtp
        });
    }
}

export const setDateTime = ({ stateName, datetime, isSelected, selectedDtp }) => {
    console.log("setDateTime:", datetime);
    return (dispatch) => {
        dispatch({
            type: DATETIME_SET,
            payload: { stateName, datetime, isSelected, selectedDtp }
        });

    }
}

export const selectPickerChecked = (pickerValue) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_PICKER_CHECKED,
            payload: pickerValue
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

export const LoadPermitList = bool => ({
    type: LOAD_PERMIT_LIST,
    payload: bool,
});

export const takePermit = (permitParameters) => {
    return (dispatch) => {
        dispatch(LoadPermitList(false));
        dispatch(AddPermitLoading(true));
        if (permitParameters == null) {
            Base.AlertMessage('Mesaj', 'İzin bilgileri boş bırakılamaz!');
        }
        else {
            PermitSystemAPI.postValue("api/Values/AddPermit", permitParameters, response => {
                //izin talebi başarıyla gönderildi
                dispatch(AddPermitLoading(false));
                Base.AlertMessage('Mesaj', 'İzin talebi başarıyla gönderildi.');
                dispatch(LoadPermitList(true)); //liste sayfasının yenilenmesi için

            }, err => {
                //apide catch'e düşünce burdada catch'e düşer id gitmezse mesela apiye catch'e düşer
                dispatch(AddPermitLoading(false));
            });
        }
    }
}
