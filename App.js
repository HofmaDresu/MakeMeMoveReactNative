import React from 'react';
import MainScreen from './views/mainScreen';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { PrimaryColor, HeaderTintColor } from './colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  headerLeftButton: {
    marginLeft: 20,
  },
})

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
  navigationOptions: ({navigation}) => {
    return {
      title: 'Make Me Move',
      headerStyle: {
        backgroundColor: PrimaryColor,
      },
      headerTintColor: HeaderTintColor,
      headerLeft: (
          <Icon name="navicon" size={20} color={HeaderTintColor} style={styles.headerLeftButton} onPress={() => navigation.navigate("DrawerToggle")} />
      ),
    };
  },
});

export default class App extends React.Component {
  static navigationOptions = {
      title: 'Make Me Move',
  };
  render() {
    return <RootStack />;
  }
}
