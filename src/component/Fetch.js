/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {Text, StyleSheet, View, Button, TextInput} from 'react-native';

export default class Fetch extends Component{

constructor () {
    super();
    this.state = {
        bookID: '',
        bookName: '',
        bookAuthor: '',
        bookPrice: '',
    };
}

    render() {
        return (
            <View style={styles.container}>
        <Text style={styles.header}> Customer Form </Text>
        <TextInput
          placeholder="Book ID"
          style={styles.textInput}
          value={this.state.cusIDBook}
          onChangeText={value => {
            this.setState({
              cusID: value,
            });
          }}
        />

        <TextInput
          placeholder="Book Name"
          style={styles.textInput}
          value={this.state.cusName}
          onChangeText={value => {
            this.setState({
              cusName: value,
            });
          }}
        />

        <TextInput
          placeholder="Book Author"
          style={styles.textInput}
          value={this.state.cusAddress}
          onChangeText={value => {
            this.setState({
              cusAddress: value,
            });
          }}
        />

        <TextInput
          placeholder="Book Price"
          style={styles.textInput}
          value={this.state.cusSalary}
          onChangeText={value => {
            this.setState({
              cusSalary: value,
            });
          }}
        />

        <Button
          title="Save Book"
          color="#3498db"
          onPress={this.saveBooks}
        />

        <Button
          title="Load All Books"
          color="#2ecc71"
          onPress={this.getDate}
        />

      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8EFBA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      height: 50,
      backgroundColor: '#ffff',
      marginHorizontal: 10,
      marginVertical: 5,
      width: 300,
    },
    header: {
      fontSize: 20,
      bottom: 40,
    },
  });