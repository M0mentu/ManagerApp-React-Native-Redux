import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
    CHANGE_PASSWORD, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL
    , AUTO_LOGIN_USER, AUTO_LOGIN_FAIL
} from '../actions/types';
import { LogOutUser } from '../actions';
const INITIAL_STATE = { email: '', password: '', error: '', loading: null, user: null, loggedIn: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false, loggedIn: true }

        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false, loggedIn: false }

        case LOGIN_USER:
            return { ...state, loading: true, error: '' }

        case AUTO_LOGIN_USER:
            return { ...state, loading: true, error: '' }

        case LOGOUT_USER:
            return { ...state, loading: true, error: '' }

        case AUTO_LOGIN_FAIL:
            return { ...state, loading: false,error:''}
            
        case LOGOUT_USER_SUCCESS:
            return { ...state, error: '', loading: false, loggedIn: false, user: '', password: '' }

        case LOGOUT_USER_FAIL:
            return { ...state, error: action.payload, loading: false, loggedIn: true }


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