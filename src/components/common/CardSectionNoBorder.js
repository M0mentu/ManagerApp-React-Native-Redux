import React from 'react';
import {View}from 'react-native';

const CardSectionNoBorder =(props)=>{
return(
    <View style={[styles.containerStyle,props.style]}>
        {props.children}
    </View>
);
};
const styles={
    containerStyle:{

       
        padding:10,
        backgroundColor:'#292929',
        flexDirection:'row',
        justifyContent: 'space-between',
        position:'relative'
    

    },
};

export  {CardSectionNoBorder};