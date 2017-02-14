/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

export default class NativeAlertRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => AlertIOS.alert(
            'Alert Title',
            'Alert Message',
          )}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Me !!</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#659EC7',
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  }
});

AppRegistry.registerComponent('NativeAlertRN', () => NativeAlertRN);
