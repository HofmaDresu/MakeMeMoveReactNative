import React from 'react';
import { View, } from 'react-native';
import LabeledStaticText from '../components/labeledStaticText';

export default class MySchedule extends React.Component {
    static navigationOptions = {
        title: 'My Schedule',
    };
    render() {
        return (<View>
            <LabeledStaticText labelText="Schedule Status" valueText="Started" />
            <LabeledStaticText labelText="Start Time" valueText="8:30 AM" />
            <LabeledStaticText labelText="End Time" valueText="5:00 PM" />
            <LabeledStaticText labelText="Active Days" valueText="Weekdays only" />
            <LabeledStaticText labelText="Reminder Period" valueText="Half Hourly" />
        </View>);
    }
}
