import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Label = ({onPress,children}) => {
    const { TextStyle,containerStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[containerStyle]} >
            <Text style={TextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    TextStyle: {


        color: '#c544ff',
        fontSize: 15,
        fontWeight: '600',
    },
    containerStyle: {
 
     
      
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#292929',
       
    }

}

export { Label };