import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import { createStore,applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './Reducers'
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';



class App extends Component {
  componentDidMount() {

    YellowBox.ignoreWarnings([
      'Warning: componentWillReceiveProps is deprecated',
      'Setting a timer'
    ]);
    const firebaseConfig = {
      apiKey: "AIzaSyAZpiHra-69DxSC58H1enDfAHKwQJAEhLo",
      authDomain: "manager-27c7e.firebaseapp.com",
      databaseURL: "https://manager-27c7e.firebaseio.com",
      projectId: "manager-27c7e",
      storageBucket: "",
      messagingSenderId: "199556006821",
      appId: "1:199556006821:web:bfc35c7098e0d8fd"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store } >
       <Router/>
   
      </Provider>
    );
  }
}
export default App;