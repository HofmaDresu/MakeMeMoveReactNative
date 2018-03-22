import React from 'react';
import { View, } from 'react-native';
import LabeledStaticText from '../components/labeledStaticText';
import styles from '../styles';

export default class MySchedule extends React.Component {
    static navigationOptions = {
        title: 'My Schedule',
    };
    render() {
        return (<View style={styles.contentArea}>
            <LabeledStaticText labelText="Schedule Status" valueText="Started" />
            <LabeledStaticText labelText="Start Time" valueText="8:30 AM" style={styles.dataDisplay} />
            <LabeledStaticText labelText="End Time" valueText="5:00 PM" style={styles.dataDisplay} />
            <LabeledStaticText labelText="Active Days" valueText="Weekdays only" style={styles.dataDisplay} />
            <LabeledStaticText labelText="Reminder Period" valueText="Half Hourly" style={styles.dataDisplay} />
        </View>);
    }
}
