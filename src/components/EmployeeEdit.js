import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave,employeeDelete } from '../actions'
import { Card, CardSection, Button,Confirm } from './common'

class EmployeeEdit extends Component {
    state={showModal:false}
    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });


    }
    onTextPress(){
        const{phone,shift}=this.props;

        Communications.text(phone,"Your upcoming shit is on "+`${shift}`)
    }
    onAccept(){
        const {uid}=this.props.employee;
        this.props.employeeDelete({uid})
    }

    onDelcine(){
        this.setState({showModal:false})
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                        </Button>

                </CardSection>

                <CardSection>
                    <Button onPress={()=>{this.setState({showModal:!this.state.showModal})}}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDelcine.bind(this)}>
                    Are you sure you want to delete {this.props.name}
                </Confirm>
            </Card>
        );
    };
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate, employeeSave,employeeDelete })(EmployeeEdit)