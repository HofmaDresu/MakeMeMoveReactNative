import React from 'react';
import { View, Text, } from 'react-native';
import styles from '../styles';

export default  class MyExercises extends React.Component {
    static navigationOptions = {
        title: 'My Exercises',
    };
    render() {
        return (<View style={styles.contentArea}><Text>My Exercises</Text></View>);
    }
}
