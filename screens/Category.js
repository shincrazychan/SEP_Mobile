import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Back_2 from '../assets/back-2.jpg';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import History from '../screens/tabs/history';
import myWallet from '../screens/tabs/myWallet';



export default function Category({navigation}) {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <ImageBackground source={Back_2} style={styles.image}>
        <View style={styles.topBar}>
          <Searchbar
            style={styles.search}
            placeholder="Search" />
          <TouchableOpacity>
            <Icon style={styles.topBarButton} name="gear" size={40} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={{ position: 'absolute', top: 15, right: 80 }} name="bell" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.middleBar}>
          <View>
            <Icon style={{ position: 'absolute', top: 15, left: 30 }} name="money" size={40} color="#fff" />
            <Text style={{ top: 60, left: 10, color: '#fff' }}>Add funds</Text>
          </View>
          <View style={{ top: -20, left: 100 }}>
            <Icon style={{ position: 'absolute', top: 15, left: 30 }} name="qrcode" size={40} color="#fff"  />
            <Text style={{ top: 60, left: 10, color: '#fff' }} onPress={() => navigation.navigate('BarCodeScanner')}>Scan code</Text>
          </View>
          <View style={{ top: -40, left: 200 }}>
            <Icon style={{ position: 'absolute', top: 15, left: 30 }} name="barcode" size={40} color="#fff" />
            <Text style={{ top: 60, left: 10, color: '#fff' }}>Withdrawal</Text>
          </View>
        </View>

        {/* số dư trong tài khoản */}

        <View style={styles.accountBalance}>
          <Text style={{ left: 10, opacity: 0.4 }}>Your account balance : </Text>
        </View>
        <View style={{ top: 90, left: 200 }}>
          <Text style={{ fontSize: 25, fontWeight: '100', fontStyle: 'italic' }}>1.000.000</Text>
        </View>

        {/* các dịch vụ khác */}

        <View style={{ position: 'relative', width: '95%', backgroundColor: 'white', height: '60%', top: 110, left: '2.5%', opacity: 0.5 }}>
          {/* sub item */}
          <View style={{ position: 'absolute', width: '30%', height: '30%', top: 10, left: 10, borderWidth: 1, borderRadius: 10, borderColor: 'gray', alignItems: 'center' }}>
            <Icon style={{ position: 'absolute', top: 15, left: 30 }} name="credit-card" size={40} color="red" />

            <Text style={{ top: '60%' }}>Card</Text>
          </View>

          <View style={{ position: 'absolute', width: '30%', height: '30%', top: 10, left: '35.5%', borderWidth: 1, borderRadius: 10, borderColor: 'gray', alignItems: 'center' }}>
            <Icon style={{ position: 'absolute', top: 15, left: 30 }} name="vk" size={40} color="blue" />

            <Text style={{ top: '60%' }}>VL Food</Text>
          </View>

          <View style={{ position: 'absolute', width: '30%', height: '30%', top: 10, left: '68%', borderWidth: 1, borderRadius: 10, borderColor: 'gray', alignItems: 'center' }}>
            <Icon style={{ position: 'absolute', top: 15, left: 30 }} name="vine" size={40} color="#09F545" />

            <Text style={{ top: '60%' }}>Vl Tea</Text>
          </View>
        </View>

      </ImageBackground>

      {/* fuking tab bars */}
      
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
