import React from 'react';// eslint-disable-line
import { TouchableOpacity, View, Text } from 'react-native';
import { PrimaryColor, AccentColor } from '../colors';

const buttonWrapperStyle =  {
    backgroundColor: '#FFFFFF',  
    borderColor: PrimaryColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
};
const buttonTextStyle = {
    color: AccentColor,  
}

export default function FloatingButton(props) {
    return (
        
    <TouchableOpacity
        onPress={props.onPress}
        style={props.style}>
        <View style={buttonWrapperStyle}>
            <Text style={buttonTextStyle}>{props.title}</Text>
        </View>
    </TouchableOpacity>);
}
