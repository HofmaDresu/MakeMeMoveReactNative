import React from 'react';
import { View, Text, } from 'react-native';
import styles from '../styles';

export default function LabeledStaticText(props) {
    return (
        <View>
            <Text style={styles.standardText}>{props.labelText}</Text>
            <Text style={[styles.standardText, styles.indent]}>{props.valueText}</Text>
        </View>);
}
