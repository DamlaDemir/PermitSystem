import { 
    CALENDAR_LOADING,
    FILL_CALENDAR_PERMIT_LIST,
    FILL_CALENDAR_MARKED_LIST
} from '../actions/types';

const INITIAL_STATE = {
    calendarPermitList : [],
    calendarLoading : false,
    markedList : {},

}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {    

        case CALENDAR_LOADING:
            return { ...state, calendarLoading: action.payload }
            
        case FILL_CALENDAR_PERMIT_LIST:
            return { ...state, calendarPermitList: action.payload }
       
        case FILL_CALENDAR_MARKED_LIST:
                return { ...state, markedList: action.payload }
    
        default:
            return state;
    }
}
