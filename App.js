import React from 'react';
import MainScreen from './views/mainScreen';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { PrimaryColor, HeaderTintColor } from './colors';
//import { StyleSheet, } from 'react-native';


const RootStack = StackNavigator({
  Home: {
    screen: DrawerNavigator(
    {
        Main: {
            screen: MainScreen,
        },
    })
  }
},
{
  navigationOptions: {
    title: 'Make Me Move',
    headerStyle: {
      backgroundColor: PrimaryColor,
    },
    headerTintColor: HeaderTintColor,
  }
});

export default class App extends React.Component {
  static navigationOptions = {
      title: 'Make Me Move',
  };
  render() {
    return <RootStack />;
  }
}
