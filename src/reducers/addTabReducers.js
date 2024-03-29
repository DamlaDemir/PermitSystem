import {DATETIME_CLICK, DATETIME_CANCEL, DATETIME_SET,SELECT_PICKER_CHECKED,SET_EXPLANATION,TAKE_PERMIT_CLICK} from '../actions/types';

const INITIAL_STATE = {
    isDtpVisibleStartTime: false,
    isDtpVisibleEndTime: false,
    isSelectedStartTime:false,
    isSelectedEndTime:false,
    stateName: '',
    startTime:new Date(),
    endTime:new Date(),
    permitType:'',
    explanation: '',
    isLoading: false
}

export default (state=INITIAL_STATE, action) =>{
    debugger;
    switch(action.type) {
        case DATETIME_CLICK:
        return{...state,stateName:action.payload.stateName,[action.payload.selectedDtp]:true}

        case DATETIME_CANCEL:
        return{...state,[action.payload.selectedDtp]:false}

        case DATETIME_SET:
        return{
            ...state,[action.payload.stateName]:action.payload.datetime.date, [action.payload.isSelected]:true
        ,[action.payload.selectedDtp]:false}

        case SELECT_PICKER_CHECKED:
        return{...state,permitType:action.payload}

        case SET_EXPLANATION:
        return{...state,explanation:action.payload}

        case TAKE_PERMIT_CLICK:
        return{...state,isLoading:true}      

        default:
        return state;
    }
}
