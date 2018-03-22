import React from 'react';// eslint-disable-line
import { TouchableNativeFeedback, View, Text } from 'react-native';
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
        
    <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.canUseNativeForeground() ? TouchableNativeFeedback.Ripple(PrimaryColor, false) : TouchableNativeFeedback.SelectableBackground()}>
        <View style={[buttonWrapperStyle, props.style]}>
            <Text style={buttonTextStyle}>{props.title}</Text>
        </View>
    </TouchableNativeFeedback>);
}
