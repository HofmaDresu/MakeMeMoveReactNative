import React from 'react';
import MainScreen from './views/mainScreen';
import { DrawerNavigator } from 'react-navigation';
//import { StyleSheet, } from 'react-native';

const RootStack = DrawerNavigator(
  {
      Main: {
          screen: MainScreen,
      },
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/