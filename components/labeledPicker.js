import React from 'react';// eslint-disable-line
import { View, Text, } from 'react-native';
import styles from '../styles';

export default function LabeledPicker(props) {
    var items = props.items.map(i => <Picker.Item label={i.label} value={i.value} key={i.value} />);

    return (
        <View style={props.style}>
            <Text style={styles.standardText}>{props.labelText}</Text>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}>
                {items}
            </Picker>
        </View>);
}
