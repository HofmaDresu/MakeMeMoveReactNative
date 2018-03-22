import React from 'react';// eslint-disable-line
import { View, Text, } from 'react-native';
import styles from '../styles';

export default function LabeledStaticText(props) {
    return (
        <View style={props.style}>
            <Text style={styles.standardText}>{props.labelText}</Text>
            <Text style={[styles.standardText, styles.dataDisplayIndent]}>{props.valueText}</Text>
        </View>);
}
