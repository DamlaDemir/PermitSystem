import { DATETIME_CLICK, DATETIME_CANCEL, DATETIME_SET, SELECT_PICKER_CHECKED, SET_EXPLANATION, ADDPERMIT_LOADING, LOAD_PERMIT_LIST } from '../actions/types';

const INITIAL_STATE = {
    isDtpVisibleStartTime: false,
    isDtpVisibleEndTime: false,
    isSelectedStartTime: false,
    isSelectedEndTime: false,
    stateName: '',
    startTime: new Date(),
    endTime: new Date(),
    permitType: '',
    explanation: '',
    isLoading: false,
    loadPermitList: true,
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case DATETIME_CLICK:
            return { ...state, stateName: action.payload.stateName, [action.payload.selectedDtp]: true }

        case DATETIME_CANCEL:
            return { ...state, [action.payload]: false }

        case DATETIME_SET:
            return {
                ...state, [action.payload.stateName]: action.payload.datetime.date, [action.payload.isSelected]: true
                , [action.payload.selectedDtp]: false
            }

        case SELECT_PICKER_CHECKED:
            return { ...state, permitType: action.payload }

        case SET_EXPLANATION:
            return { ...state, explanation: action.payload }

        case ADDPERMIT_LOADING:
            return { ...state, isLoading: action.payload }
        case LOAD_PERMIT_LIST:
            return { ...state, loadPermitList: action.payload }

        default:
            return state;
    }
}
