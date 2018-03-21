
import React from 'react';
import {  TabNavigator, TabBarBottom } from 'react-navigation';
import  ScheduleScreen from './schedule';
import  ExercisesScreen from './exercises';
import { PrimaryColor, HeaderTintColor, InactiveHeaderTintColor } from '../colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabStack = TabNavigator({
    MySchedule: {screen: ScheduleScreen},
    MyExercises: {screen: ExercisesScreen},
},
{
    navigationOptions: ({navigation}) =>({
        tabBarIcon: ({tintColor}) => {
            const { routeName } = navigation.state;
            const iconName = routeName === "MySchedule" ? "calendar" : "list";
            return (<Icon name={iconName} size={25} color={tintColor} />);
        },
    }),
    tabBarOptions: {
        activeTintColor: HeaderTintColor,
        inactiveTintColor: InactiveHeaderTintColor,
        style: {
            backgroundColor: PrimaryColor,
        },
        showIcon: true,
    },
    tabBarComponent: TabBarBottom,
    animationEnabled: true,
    swipeEnabled: false,
});

export default class MySchedule extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (<TabStack />);
    }
}


