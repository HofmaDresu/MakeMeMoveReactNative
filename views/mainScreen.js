
import React from 'react';
import {  TabNavigator } from 'react-navigation';
import  ScheduleScreen from './schedule';
import  ExercisesScreen from './exercises';
import { PrimaryColor, HeaderTintColor } from '../colors';

const TabStack = TabNavigator({
    MySchedule: {screen: ScheduleScreen},
    MyExercises: {screen: ExercisesScreen},
},
{
    tabBarOptions: {
        activeTintColor: HeaderTintColor,
        style: {
            backgroundColor: PrimaryColor,
        },
    },
});

export default class MySchedule extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (<TabStack />);
    }
}


