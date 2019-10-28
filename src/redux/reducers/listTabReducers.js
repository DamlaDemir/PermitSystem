import { 
    FILL_PERMIT_LIST,
    SELECT_PERSONEL_PICKER_CHECKED,
    FILTER_LOADING,
    FILL_PERSONEL_LIST
} from '../actions/types';

const INITIAL_STATE = {
    permitList : [],
    personelId : '',
    filterLoading : false,
    personnel: []
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {    
        case SELECT_PERSONEL_PICKER_CHECKED:
            return { ...state, personelId: action.payload }

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
