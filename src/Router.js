import React from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import RegisterForm from './components/RegisterForm';
import ResetPassword from './components/ResetPassword';
import EmployeeEdit from './components/EmployeeEdit';
import UserProfile from './components/UserProfile';
const RouterComponent = () => {
    return (
        <Router  navigationBarStyle={{ backgroundColor: '#292929',borderBottomWidth: 1,borderColor: "#c544ff"}}titleStyle={{color:"#fee" ,alignSelf:'center'}}sceneStyle={{backgroundColor:"#2b2b2b"}}>
            <Scene key="root" hideNavBar >
                <Scene key="auth" >
                    <Scene key="login" component={LoginForm} title="Login" initial  />
                    <Scene key="register" component={RegisterForm} title="Register"  />
                    <Scene key="resetpassword" component={ResetPassword} title="Reset Password"  />
                </Scene>
                <Scene key="main">
                    <Scene
                    key="userprofile"
                    component={UserProfile}
                    title="Profile"
                    initial
                    />
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees List"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate() }}
                         />

                    <Scene
                    key="employeeCreate"
                    title="Create Employee"
                    component={EmployeeCreate}
                    />
                     <Scene
                    key="employeeEdit"
                    title="Edit Employee"
                    component={EmployeeEdit}
                    />
                </Scene>
            </Scene>
        </Router>
    );
}
export default RouterComponent;