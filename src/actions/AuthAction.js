import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text

    };
}
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => { loginUserFail(dispatch,error) });
    };
};
export const changePassword = ({ email }) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_PASSWORD })
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>changePasswordSuccess(dispatch))
        .catch((error)=>{changePasswordFailed(dispatch,error)});
        
    };
};
const changePasswordSuccess = (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_SUCCESS })
    alert("Please Check your email");
    Actions.login();
}
const changePasswordFailed = (dispatch,error) => {
    dispatch({ type: CHANGE_PASSWORD_FAIL,payload:error })
}

const loginUserFail = (dispatch,error) => {
    dispatch({ type: LOGIN_USER_FAIL,
    payload:error });
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
}

