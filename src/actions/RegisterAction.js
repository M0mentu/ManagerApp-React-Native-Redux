import {REGISTER_EMAIL,REGISTER_PASSWORD,REGISTER_USER,REGISTER_USER_FAIL,REGISTER_USER_SUCCESS}from './types'
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const registerEmail=(text)=>{

    return{
        type:REGISTER_EMAIL,
        payload:text
    };
};

export const registerPassword=(text)=>{
    return{
        type:REGISTER_PASSWORD,
        payload:text
    };
};

export const RegisterUser=({email,password})=>{
    return(dispatch)=>{
        dispatch({type:REGISTER_USER})
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>registerUserSuccess(dispatch,user,email,password))        
        .catch((error)=>{registerUserFail(dispatch,error)})
    };
};
const registerUserFail=(dispatch,error)=>{
    dispatch({type:REGISTER_USER_FAIL,payload:error});
    };

    const registerUserSuccess = (dispatch, user,email,password) => {
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: user
        });
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(Actions.main())
        .catch(()=>{registerUserFail(dispatch)})
    
    }
