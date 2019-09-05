import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
     LOGIN_USER, CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL, LOGOUT_USER,LOGOUT_USER_FAIL,LOGOUT_USER_SUCCESS
    ,AUTO_LOGIN_USER,AUTO_LOGIN_FAIL } from './types';
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
export const LogOutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER })
        firebase.auth().signOut()
        .then(()=>SignOutSuccess(dispatch))
        .catch((error)=>SignOutFail(error,dispatch))
    };
};
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => { loginUserFail(dispatch, error) });
    };
};
export const autoLogIn =()=>{
    return(dispatch)=>{
        dispatch({type:AUTO_LOGIN_USER});
        
        setTimeout(() => {
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    
                    loginUserSuccess(dispatch,user);
                }
                else{
                    alert("here");
                    dispatch({type:AUTO_LOGIN_FAIL});
                }
            }) 
           
        }, 1000);


        // function delay(ms) {
        //     return new Promise(resolve => setTimeout(resolve, ms));
        //   }
        //       delay(3000).then(() => {
        //         firebase.auth().onAuthStateChanged((user)=>{
        //             if(user){
                        
        //                 loginUserSuccess(dispatch,user);
        //             }
        //             else{
        //                 dispatch({type:AUTO_LOGIN_FAIL});
        //             }
        //         }) 
        //       });              
            
    
       
            // firebase.auth().onAuthStateChanged((user)=>{
            //     if(user){
                    
            //         loginUserSuccess(dispatch,user);
            //     }
            //     else{
            //         alert("here");
            //         dispatch({type:AUTO_LOGIN_FAIL});
            //     }
            // })
            // .then((user)=>{loginUserSuccess(dispatch,user)})
            // .catch(()=>{dispatch({type:AUTO_LOGIN_FAIL})})
 
     
    
    }
}
export const changePassword = ({ email }) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_PASSWORD })
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => changePasswordSuccess(dispatch))
            .catch((error) => { changePasswordFailed(dispatch, error) });

    };
};
const SignOutSuccess=(dispatch)=>{
    dispatch({type:LOGOUT_USER_SUCCESS})
    Actions.auth();
}
const SignOutFail=(error,dispatch)=>{
    dispatch({type:LOGOUT_USER_FAIL})
    alert(error);
    
}
const changePasswordSuccess = (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_SUCCESS })
    alert("Please Check your email");
    Actions.login();
}
const changePasswordFailed = (dispatch, error) => {
    dispatch({ type: CHANGE_PASSWORD_FAIL, payload: error })
}

const loginUserFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: error
    });
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
}

