import React from 'react';
import { View, Text, } from 'react-native';

export default class MySchedule extends React.Component {
    static navigationOptions = {
        title: 'My Schedule',
    };
    render() {
        return (<View><Text>My Schedule</Text></View>);
    }
}
