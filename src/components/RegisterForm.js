import React, { Component } from 'react';
import{View,Text}from 'react-native';
import { connect } from 'react-redux';
import { registerEmail, registerPassword, RegisterUser } from '../actions/RegisterAction'
import { Input, Button, Card, CardSection, CardSectionNoBorder, Spinner } from './common'

class RegisterForm extends Component {
    onEmailChange(text) {
        this.props.registerEmail(text);
    }
    onPasswordChange(text) {
        this.props.registerPassword(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.RegisterUser({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return (<Spinner size="large" />);
        }
        else {
            return (<Button onPress={this.onButtonPress.bind(this)}> REGISTER</Button>);
        }
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
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        palceholder="example@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        palceholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password} />

                </CardSection>
                <CardSectionNoBorder>
                    {this.renderButton()}
                </CardSectionNoBorder>

                <CardSectionNoBorder>
                    {this.renderError()}
                </CardSectionNoBorder>
            </Card>
        );
    }
};
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: "red"
    }
}
const mapStateToProps = ({ registerform }) => {
    const { email, password, error, loading } = registerform;
    return {email, password, error, loading};

}



export default connect(mapStateToProps, { registerEmail, registerPassword, RegisterUser })(RegisterForm);
