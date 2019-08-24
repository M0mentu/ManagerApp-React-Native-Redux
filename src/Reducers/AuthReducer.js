import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, CHANGE_PASSWORD, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_SUCCESS } from '../actions/types';
const INITIAL_STATE = { email: '', password: '', error: '', loading: null, user: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false }

        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false }

        case LOGIN_USER:
            return { ...state, loading: true, error: '' }

        case CHANGE_PASSWORD:
            return { ...state, loading: true, error: '' }

        case CHANGE_PASSWORD_SUCCESS:
            return { ...state, loading: false }

        case CHANGE_PASSWORD_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}