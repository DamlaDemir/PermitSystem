import { 
    ADD_PERMIT_DATETIME_CLICK, 
    ADD_PERMIT_DATETIME_CANCEL, 
    ADD_PERMIT_DATETIME_SET, 
    ADD_PERMIT_TYPE_PICKER_CHECKED, 
    SET_EXPLANATION, 
    ADDPERMIT_LOADING, 
    LOAD_PERMIT_LIST,
    SET_PERMIT_NO,
    SET_REQUEST_DATE,
    ADD_PERMIT_SET_STATUS,
    ADD_PERMIT_CLEAR_STATE,
    LOAD_CALENDAR_PERMIT_LIST
} from '../actions/types';

import PermitStatusEnum from '../../common/Enums/PermitStatusEnum';

const INITIAL_STATE = {
    addPermit_isDtpVisibleStartTime: false,
    addPermit_isDtpVisibleEndTime: false,
    addPermit_isSelectedStartTime: false,
    addPermit_isSelectedEndTime: false,
    addPermit_stateName: '',
    addPermit_startTime: null,
    addPermit_endTime: null,
    addPermit_permitType: -1,
    addPermit_permitStatus: PermitStatusEnum.ONAYBEKLIYOR,
    explanation: '',
    addPermitLoading: false,
    loadPermitList: false,
    loadCalendarPermitList: false,
    pertmitNo: -1,
    requestDate: new Date()

}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case ADD_PERMIT_DATETIME_CLICK:
            return { ...state, addPermit_stateName: action.payload.stateName, [action.payload.selectedDtp]: true }
            
        case ADD_PERMIT_DATETIME_CANCEL:
            return { ...state, [action.payload]: false }

        case ADD_PERMIT_DATETIME_SET:
            return {
                ...state, [action.payload.stateName]: action.payload.datetime, [action.payload.isSelected]: true
                , [action.payload.selectedDtp]: false
            }

        case ADD_PERMIT_TYPE_PICKER_CHECKED:
            return { ...state, addPermit_permitType: action.payload }
         
        case SET_EXPLANATION:
            return { ...state, explanation: action.payload }

        case ADDPERMIT_LOADING:
            return { ...state, addPermitLoading: action.payload }

        case LOAD_PERMIT_LIST:
            return { ...state, loadPermitList: action.payload }
        
        case LOAD_CALENDAR_PERMIT_LIST:
            return { ...state, loadCalendarPermitList: action.payload }
            
        case SET_PERMIT_NO:
            return { ...state, pertmitNo: action.payload }
        
        case SET_REQUEST_DATE:
            return { ...state, requestDate: action.payload }
                         
        case ADD_PERMIT_SET_STATUS:
            return { ...state, addPermit_permitStatus: action.payload }
                   
        case ADD_PERMIT_CLEAR_STATE:
            return INITIAL_STATE
                   
        default:
            return state;
    }
}
