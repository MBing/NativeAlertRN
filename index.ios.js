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
  constructor() {
    super();
    this.state = {
      textForButton: 'Button text will come here',
    };
  }

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
        <TouchableHighlight
          onPress={() => AlertIOS.alert(
            'Alert Title',
            'Alert Message',
            [
              {text: 'Button 1', onPress: () => this.setState({textForButton: 'Button 1 clicked'})},
              {text: 'Button 2', onPress: () => this.setState({textForButton: 'Button 2 clicked'})},
            ],
          )}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Alert with Buttons !!</Text>
          </View>
        </TouchableHighlight>
        <Text>{this.state.textForButton}</Text>
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
