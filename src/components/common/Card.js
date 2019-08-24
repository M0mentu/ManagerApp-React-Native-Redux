import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#c544ff',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: "#2b2b2b"
        

    }
}

export  {Card};