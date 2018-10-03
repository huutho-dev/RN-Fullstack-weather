import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// props là thuộc tính k thay đổi, thuộc quyền sở hữu của components cha
// state là thuộc tính có thể thay đổi, và thuộc quyền sở hữu của chính component con
// không thể trực tiếp gán this.state = {something} được, mà phải sử dụng this.setState() để còn reRender lại component

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = text => {
    this.setState({
      text,
    });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props; // tạo ra một prop cho props
    const { text } = this.state;

    if (text) {
      console.log(`${text}`);
      onSubmit(text);
      this.setState({
        text: '',
      });
    }
  };

  render() {
    const { placeHolder } = this.props; // tạo ra một prop cho props
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeHolder}
          value={text}
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          clearButtonMode="always"
          style={styles.textInput}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
