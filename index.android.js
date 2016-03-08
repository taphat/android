/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Packstack extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.homeImage} source={require('./packstack.png')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00caf2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  home: {
    textAlign: 'center',
    backgroundColor: '#00caf2',
    marginBottom: 5,
  },
  homeImage: {
    width: 315,
    height: 215,
  }
});

AppRegistry.registerComponent('Packstack', () => Packstack);
