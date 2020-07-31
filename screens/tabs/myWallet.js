import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';




export default function myWallet() {
  return (
    <View style={styles.container}>
      <Text>This is my fuking wallet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',

  },
  search: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    borderRadius: 10,

  },
  topBar: {
    backgroundColor: '#59726F',
    height: 70,

  },
  topBarButton: {
    color: '#fff',
    position: 'absolute',
    right: 10,
    top: 15
  },
  middleBar: {
    top: 80,
    width: '95%',
    height: '15%',
    marginLeft: '2.5%',
    paddingLeft: 30,
    backgroundColor: 'gray',
    opacity: 0.6,
    position: 'absolute'
  },
  accountBalance: {
    top: 120
  }

});
