import React from 'react';
import { View, } from 'react-native';
import LabeledStaticText from '../components/labeledStaticText';
import LabeledPicker from '../components/labeledStaticText';
import FloatingButton from '../components/floatingButton';
import styles from '../styles';

export default class MySchedule extends React.Component {
    static navigationOptions = {
        title: 'My Schedule',
    };
    render() {
        const activeDaysOptions = [
            {label: "Every Day", key:"Every Day"},
            {label: "Weekdays Only", key:"Weekdays Only"},
            {label: "Weekends Only", key:"Weekends Only"},
        ];

        const reminderPeriodOptions = [
            { label: "Every Hour", key:"Every Hour" },
            { label: "Every Half Hour", key:"Every Half Hour" },
        ]

        return (<View style={styles.contentArea}>
            <LabeledStaticText labelText="Start Time" valueText={this.props.schedule.startTime} style={styles.dataDisplay} />
            <LabeledStaticText labelText="End Time" valueText={this.props.schedule.endTime} style={styles.dataDisplay} />
            <LabeledPicker labelText="Active Days" items={activeDaysOptions} style={styles.dataDisplay} />
            <LabeledPicker labelText="Reminder Period" items={reminderPeriodOptions} style={styles.dataDisplay} />
            <FloatingButton style={styles.centeredItem} title="Save" />
        </View>);
    }
}
