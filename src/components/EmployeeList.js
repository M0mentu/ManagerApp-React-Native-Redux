import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';
class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
    }
    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }



    render() {
        return (
            <View>
                <FlatList
                    data={this.props.employees}
                    renderItem={({ item }) => this.renderRow(item)}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);