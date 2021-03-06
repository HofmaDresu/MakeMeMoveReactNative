import { PrimaryColor, MainBackgroundColor } from './colors';
import { StyleSheet, } from 'react-native';

export default StyleSheet.create({
  standardText: {
    color: PrimaryColor,
    fontSize: 22,
  },
  indent: {
      marginLeft:20,
  },
  contentArea: {
      margin:20,
      backgroundColor: MainBackgroundColor,
  },
  dataDisplay: {
      marginTop:10,
  },
  dataDisplayIndent: {
      marginLeft: 40,
  },
  centeredItem: {
      alignSelf: 'center',
  }
})