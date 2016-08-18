import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ListView
} from 'react-native';


class AmazingComponent extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    }
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      <Text>Text input field:</Text>
      <TextInput
        style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text} />
        
      <Text>List View:</Text>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>} />

      </View>
    );
  }
}

export default AmazingComponent;

