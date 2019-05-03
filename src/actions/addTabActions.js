import {DATETIME_CLICK,DATETIME_CANCEL,DATETIME_SET,SELECT_PICKER_CHECKED,SET_EXPLANATION,TAKE_PERMIT_CLICK} from './types';


export const clickDatetimePicker = ({stateName, selectedDtp}) => {
    debugger;
    console.log("clickdatetimepicker");
    return(dispatch) => {
        dispatch({
            type: DATETIME_CLICK,
            payload: {stateName, selectedDtp}
        });
    }
}


export const cancelDatetimePicker = (selectedDtp) => {
    console.log("canceldatetimepicker");
debugger;
    return(dispatch) => {
        dispatch({
            type: DATETIME_CANCEL,
            payload: selectedDtp
        });
    }
}

export const setDateTime = ({stateName,datetime,isSelected,selectedDtp}) => {
    console.log("setDateTime:",datetime);
    debugger;
    return(dispatch) => {
        dispatch({
            type: DATETIME_SET,
            payload: {stateName,datetime,isSelected,selectedDtp}
        });

    }
}

export const selectPickerChecked = (permitType) => {
    debugger;
    return(dispatch) => {
        dispatch({
            type: SELECT_PICKER_CHECKED,
            payload: permitType
        });

    }
}

export const setExplanation = (explanation) => {
    debugger;
    return(dispatch) => {
        dispatch({
            type: SET_EXPLANATION,
            payload: explanation
        });

    }
}

export const takePermit = (permitParameters) => {
    debugger;
    return(dispatch) => {
        dispatch({
            type: TAKE_PERMIT_CLICK
        });

        /*
        if(permitParameters == null)
        {
            //parametrede eksik varsa fail ver alert bas
        }
        else{
           // servise çıkılcak başarılıysa 
        }*/
    }
}