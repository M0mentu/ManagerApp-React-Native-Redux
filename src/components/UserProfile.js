import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LogOutUser } from '../actions'
import firebase from 'firebase';
import { Card, CardSection, Button } from './common'
import { Actions } from 'react-native-router-flux';

class UserProfile extends Component {
    SignOut() {
        this.props.loggedIn = false;
        this.props.LogOutUser();
    }
    renderEmail() {
        if(this.props.loggedIn){
        return (
            <Text>{this.props.user.user.email}</Text>
        );
        }
        else{
            return(false);
        }
    }
    render() {
        return (
            <View>
                <CardSection>
                    <Button onPress={this.SignOut.bind(this)}>
                        Sign Out
                    </Button>
                </CardSection>
                <CardSection>
                    {this.renderEmail()}
                </CardSection>
            </View>
        );
    }
}
const mapstateToProps = ({ auth }) => {
    const { error, loading, user, loggedIn } = auth;
    return { error, loading, user, loggedIn };

}
export default connect(mapstateToProps, { LogOutUser })(UserProfile);