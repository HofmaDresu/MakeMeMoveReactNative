import React from 'react';
import MainScreen from './views/mainScreen';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { PrimaryColor, HeaderTintColor } from './colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import reducers from './reducers';
import {createStore} from 'redux';
import { Provider } from 'react-redux'

//TODO: Initial state;
const makeMeMoveStore = createStore(reducers, {});

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
          <Icon name="navicon" size={20} color={HeaderTintColor} style={styles.indent} onPress={() => navigation.navigate("DrawerToggle")} />
      ),
    };
  },
});

export default class App extends React.Component {
  static navigationOptions = {
      title: 'Make Me Move',
  };
  render() {
    return <Provider store={makeMeMoveStore}><RootStack /></Provider>;
  }
}
