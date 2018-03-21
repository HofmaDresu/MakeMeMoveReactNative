
import React from 'react';
import {  TabNavigator } from 'react-navigation';
import  ScheduleScreen from './schedule';
import  ExercisesScreen from './exercises';

const TabStack = TabNavigator({
    MySchedule: {screen: ScheduleScreen},
    MyExercises: {screen: ExercisesScreen},
})

export default class MySchedule extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (<TabStack />);
    }
}


