import { REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, REGISTER_USER } from '../actions/types';
const INITIAL_STATE = { email: '', password: '', error: '', loading: null };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_EMAIL:
            return { ...state, email: action.payload }
        case REGISTER_PASSWORD:
            return { ...state, password: action.payload }

        case REGISTER_USER_FAIL:
            return { ...state, error: action.payload, loading: false }

        case REGISTER_USER_SUCCESS:
            return { ...state, user: action.payload, error:'', loading: false }

        case REGISTER_USER:
            return {...state, loading: true }
        default:
            return state;
    }
}