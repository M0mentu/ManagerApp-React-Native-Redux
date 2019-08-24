import { EMPLOYEE_UPDATE,EMLOYEE_CREATE} from '../actions/types';


const INITIAL_STATE = {name:'',phone:'',shift:''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return{...state,[action.payload.prop]:action.payload.value}
            
            case EMLOYEE_CREATE:
                return INITIAL_STATE;

        default:
            return state;
    }
};