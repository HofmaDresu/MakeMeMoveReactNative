import React from 'react';
import { View, Text, } from 'react-native';

export default  class MyExercises extends React.Component {
    static navigationOptions = {
        title: 'My Exercises',
    };
    render() {
        return (<View><Text>My Exercises</Text></View>);
    }
}
