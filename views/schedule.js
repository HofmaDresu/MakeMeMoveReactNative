import React from 'react';
import { View, } from 'react-native';
import LabeledStaticText from '../components/labeledStaticText';
import FloatingButton from '../components/floatingButton';
import styles from '../styles';

export default class MySchedule extends React.Component {
    static navigationOptions = {
        title: 'My Schedule',
    };
    render() {
        return (<View style={styles.contentArea}>
            <LabeledStaticText labelText="Schedule Status" valueText={this.props.schedule.isRunning ? "Started" : "Stopped"} />
            <LabeledStaticText labelText="Start Time" valueText={this.props.schedule.startTime} style={styles.dataDisplay} />
            <LabeledStaticText labelText="End Time" valueText={this.props.schedule.endTime} style={styles.dataDisplay} />
            <LabeledStaticText labelText="Active Days" valueText={this.props.schedule.activeDays} style={styles.dataDisplay} />
            <LabeledStaticText labelText="Reminder Period" valueText={this.props.schedule.reminderPeriod} style={styles.dataDisplay} />
            <FloatingButton style={styles.centeredItem} title="CHANGE SCHEDULE" />
        </View>);
    }
}
