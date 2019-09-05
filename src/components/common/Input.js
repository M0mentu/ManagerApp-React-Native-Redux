import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, palceholder,secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle, } = styles;


    return (
      

        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
                placeholder={palceholder}
                placeholderTextColor= "#595959"
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}

            />
        </View>

    );
}
const styles = {

    inputStyle: {
        
        color: "#fff",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderBottomWidth: 1,
        borderColor: '#c544ff',
    },
    labelStyle: {
        color: "#fee",
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    }
};
export { Input };