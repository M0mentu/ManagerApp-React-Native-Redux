import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text,Image } from 'react-native';
import {Actions}from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button,Spinner,Label,CardSectionNoBorder} from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);

    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    onRegisterPress(){
        Actions.register();
    }
    onResetPress(){
        Actions.resetpassword();
    }
    
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: "#2b2b2b" }}>
                    <Text style={styles.errorTextStyle}>{this.props.error.message}</Text>
                </View>
            );
        }
    }
    renderButton(){
        if(this.props.loading){
         return( <Spinner size="large"/>);
        }
        else{
          return(  <Button onPress={this.onButtonPress.bind(this)}>
            Login
         </Button>);
        }
    }

    render() {
        return (
            <View>
                 <View style={{alignSelf: 'center',}}>
                    <Image
                    source={require('../MIN.png')}
                     style={{width: 250, height: 250, resizeMode: 'stretch',marginTop:15}}> 

                    </Image>
                </View>
            <Card>
               
                <CardSection>
                    <Input
                        label="Email"
                        palceholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>


                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        palceholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}

                <CardSectionNoBorder>
                   {this.renderButton()}
                </CardSectionNoBorder>
                
                <CardSectionNoBorder>
                <Label onPress={this.onResetPress.bind(this)} >Forgot Password ?</Label>

                <Label onPress={this.onRegisterPress.bind(this)}>Register Here</Label>
                </CardSectionNoBorder>
                
                
            </Card>
            </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        padding: 10,
        fontSize: 18,
        alignSelf: 'center',
        color: "red"
    }
}
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
