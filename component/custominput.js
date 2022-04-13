import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 0.1 }}>
        <TextInput
          style={{
            backgroundColor: 'lightblue',
            borderWidth: this.props.borderWidth,
            borderColor: this.props.borderColor,
            flex: 0.9,
            borderRadius: this.props.borderRadius,
            textAlign: 'center',
          }}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChangeText={ this.props.onChangeText}></TextInput>
      </View>
    );
  }
}

