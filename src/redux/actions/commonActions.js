import { 
    LOAD_PERMIT_LIST
  } from '../actions/types';

export const clickDatetimePicker = ( type,stateName, selectedDtp ) => {
    console.log("clickdatetimepicker");
    return (dispatch) => {
        dispatch({
            type: type,
            payload: { stateName, selectedDtp }
        });
    }
}

export const cancelDatetimePicker = (type,selectedDtp) => {
    console.log("canceldatetimepicker");
    return (dispatch) => {
        dispatch({
            type: type,
            payload: selectedDtp
        });
    }
}

export const setDateTime = ( type,stateName, datetime, isSelected, selectedDtp ) => {
    debugger;
    console.log("setDateTime:", datetime);
    return (dispatch) => {
        dispatch({
            type: type,
            payload: { stateName, datetime, isSelected, selectedDtp }
        });

    }
}

export const selectPickerChecked = (type,pickerValue) => {
    return (dispatch) => {
        dispatch({
            type: type,
            payload: pickerValue
        });
    }
}

export const loadPermitList = bool => ({
    type: LOAD_PERMIT_LIST,
    payload: bool,
});