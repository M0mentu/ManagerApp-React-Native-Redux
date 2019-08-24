import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress,children}) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
                </Text>
        </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {

        flex:1,
        
        alignSelf: 'stretch',
        backgroundColor: '#292929',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c544ff',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
   
        alignSelf: 'center',
        color: '#c544ff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }

}
export { Button };