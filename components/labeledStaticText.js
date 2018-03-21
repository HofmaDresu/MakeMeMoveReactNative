import React from 'react';
import { View, Text, } from 'react-native';

export default function LabeledStaticText(props) {
    return (
        <View>
            <Text>{props.labelText}</Text>
            <Text>{props.valueText}</Text>
        </View>);
}
