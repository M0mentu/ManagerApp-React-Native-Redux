import React, { Component } from 'react';
import {View,Text}from 'react-native';
import { CardSection, Card, CardSectionNoBorder, Input, Button,Spinner} from './common'
import { connect } from 'react-redux';
import { emailChanged, changePassword } from '../actions/AuthAction'

class ResetPassword extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onButtonPress() {
        const {email}=this.props;
        this.props.changePassword({email});
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
const mapStateToProps = ({ auth }) => {
    const { email, loading, error } = auth;
    return { email, loading, error };
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: "red"
    }
}
export default connect(mapStateToProps, { emailChanged,changePassword })(ResetPassword);