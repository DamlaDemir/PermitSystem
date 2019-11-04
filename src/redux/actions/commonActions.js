
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

export const clearState = (type) => {
    return (dispatch) => {
     dispatch({
            type: type
        });  
    }
}

export const pageLoading = (type,value) => {
    return (dispatch) => {
        dispatch({
            type: type,
            payload: value
        });
    }
}

export const loadPermitList = (type,value) => { //izin eklenince gelen type'a göre liste veya calendar sayfasının yenilenmesi için
    return (dispatch) => {
        dispatch({
            type: type,
            payload: value
        });
    }
}

