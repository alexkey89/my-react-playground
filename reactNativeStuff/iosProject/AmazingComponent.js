/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class AmazingComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default AmazingComponent;

