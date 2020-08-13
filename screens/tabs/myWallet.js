import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity, Image, TextInput } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import Catcry from '../../assets/cat.jpg';
import { render } from 'react-dom';
import * as firebase from 'firebase'

export default class myWallet extends React.Component {

  // st
  state = {
    email: "",
    displayName: "",

  }

  // connect to firebase
  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  // logout function 
  signOutUser(){
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{ width: 350, height: 600, backgroundColor: '#E5E7E9', marginLeft: 12, marginTop: 20 }}>
        {/* left icon */}
        <View style={{ position: "absolute", width: 50, height: 60, top: 20, left: 20 }}>
          <Icon name='md-people' color='#F1948A' size='60' ></Icon>
        </View>
        {/* content of history */}
        <View style={{ position: "absolute", width: 260, height: 40, left: 100, top: 5 }}>
          <Text style={{ fontSize: 20, marginTop: 5, textTransform: 'uppercase', }} >nguyen tan huy</Text>
        </View>
        <View style={{ position: "absolute", width: 150, height: 30, right: 50, top: 35 }}>
          <Icon style={{ color: '#F1C40F', position: 'absolute', left: -40 }} name='ios-medal' size='25'></Icon>
          <Text style={{ position: "absolute", fontSize: 13, marginTop: 5, right: 70 }}>Gold member</Text>
        </View>
        <View style={{ position: "absolute", width: 250, height: 30, right: 10, top: 60 }}>
          <Text style={{ position: "absolute", fontSize: 13, marginTop: 5, right: 20 }}>Studen of Van Lang University</Text>
        </View>
        <View style={styles.accountBalance}>
          <Text style={{ left: 10, opacity: 0.4 }}>Your account balance : </Text>
        </View>
        <View style={{ top: 90, left: 200 }}>
          <Text style={{ fontSize: 25, fontWeight: '100' }}>1.000.000</Text>
        </View>
        {/* content of setting user */}
        <ScrollView>
          <View style={styles.accountBalance}>
            <Text style={{ top: 10, left: 10, opacity: 0.4, borderBottomWidth: 1 }}>Fullname :</Text>
            <TextInput style={{ width: 200, height: 40, position: "absolute", left: 100, top: 0 }} underlineColorAndroid="transparent"
              placeholderTextColor="black"
              autoCapitalize="none">Nguyen Tan Huy</TextInput>
          </View>
          <View style={styles.accountBalance}>
            <Text style={{ top: 10, left: 10, opacity: 0.4, borderBottomWidth: 1 }}>Birthday :</Text>
            <TextInput style={{ width: 200, height: 40, position: "absolute", left: 100, top: 0 }} underlineColorAndroid="transparent"
              placeholderTextColor="black"
              autoCapitalize="none">07/09/1997</TextInput>
          </View>
          <View style={styles.accountBalance}>
            <Text style={{ top: 10, left: 10, opacity: 0.4, borderBottomWidth: 1 }}>Phone number :</Text>
            <TextInput style={{ width: 200, height: 40, position: "absolute", left: 140, top: 0 }} underlineColorAndroid="transparent"
              placeholderTextColor="black"
              autoCapitalize="none">034800****</TextInput>
          </View>
          <View style={styles.accountBalance}>
            <Text style={{ top: 10, left: 10, opacity: 0.4, borderBottomWidth: 1 }}>Address :</Text>
            <TextInput style={{ width: 200, height: 40, position: "absolute", left: 100, top: 0 }} underlineColorAndroid="transparent"
              placeholderTextColor="black"
              autoCapitalize="none">NewYork city</TextInput>
          </View>
          <View style={styles.accountBalance}>
            <Text style={{ top: 10, left: 10, opacity: 0.4, borderBottomWidth: 1 }}>Email :</Text>
            <TextInput style={{ width: 200, height: 40, position: "absolute", left: 100, top: 0 }} underlineColorAndroid="transparent"
              placeholderTextColor="black"
              autoCapitalize="none">{this.state.email}</TextInput>
          </View>
          <View style={styles.accountBalance} >
            <Text style={{ top: 10, left: 10, opacity: 0.4, borderBottomWidth: 1 }}>Password :</Text>
            <Text style={{ width: 200, height: 40, position: "absolute", left: 100, top: 10 }} underlineColorAndroid="transparent"
              placeholderTextColor="black"
              autoCapitalize="none" onPress={() =>this.props.navigation.navigate('Change password')}> ******</Text>
            <Icon style={{ position: 'absolute', right: 10 }} name='ios-arrow-forward' size='25' onPress={() =>this.props.navigation.navigate('Change password')}></Icon>
          </View>
          {/* <Text style={styles.submitButton} onPress={() => navigation.navigate('Login')}> Change info </Text> */}

        </ScrollView>

      </View>
    );
  }
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
    top: 120,
    marginTop: 30
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    width: 120,
    marginLeft: 30,
    borderRadius: 40,
    color: '#fff',
  },

});
