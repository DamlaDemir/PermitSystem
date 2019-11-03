import { 
    FILL_PERMIT_LIST,
    FILTER_LOADING,
    FILL_PERSONEL_LIST,
    FILTER_PERMIT_DATETIME_CLICK,
    FILTER_PERMIT_DATETIME_CANCEL,
    FILTER_PERMIT_DATETIME_SET,
    FILTER_PERMIT_STATUS_PICKER_CHECKED,
    FILTER_PERMIT_PERSONEL_PICKER_CHECKED
} from '../actions/types';

const INITIAL_STATE = {
    permitList : [],
    filterLoading : false,
    personnel: [],
    filterPermit_isDtpVisibleStartTime: false,
    filterPermit_isDtpVisibleEndTime: false,
    filterPermit_isSelectedStartTime: false,
    filterPermit_isSelectedEndTime: false,
    filterPermit_stateName: '',
    filterPermit_startTime: null,
    filterPermit_endTime: null,
    filterPermit_permitStatus: -1,
    filterPermit_personelId: -1
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {    
        case FILTER_PERMIT_DATETIME_CLICK:
            return { ...state, filterPermit_stateName: action.payload.stateName, [action.payload.selectedDtp]: true }
            
        case FILTER_PERMIT_DATETIME_CANCEL:
            return { ...state, [action.payload]: false }

        case FILTER_PERMIT_DATETIME_SET:
            return {
                ...state, [action.payload.stateName]: action.payload.datetime, [action.payload.isSelected]: true
                , [action.payload.selectedDtp]: false
            }

        case FILTER_PERMIT_STATUS_PICKER_CHECKED:
            return { ...state, filterPermit_permitStatus: action.payload }

        case FILTER_PERMIT_PERSONEL_PICKER_CHECKED:
            return { ...state, filterPermit_personelId: action.payload }

        case FILL_PERMIT_LIST:
            return { ...state, permitList: action.payload }
        
        case FILTER_LOADING:
            return { ...state, filterLoading: action.payload }
        
        case FILL_PERSONEL_LIST:
                return { ...state, personnel: action.payload }
    
        default:
            return state;
    }
}
