/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

class AmazingComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      
      <TextInput
        style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text} />

      </View>
    );
  }
}

export default AmazingComponent;

