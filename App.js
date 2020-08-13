import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import CategoriesScreen from './screens/Login';
import CategoryScreen from './screens/Category';
import ChangePass from './screens/ChangePass';
import ScanScreen from './screens/ScanScreen';
import History from '../SmallDeMo/screens/tabs/history';
import myWallet from '../SmallDeMo/screens/tabs/myWallet';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MenuProvider } from 'react-native-popup-menu';
import Icon from "react-native-vector-icons/Ionicons";
import loading from '../SmallDeMo/screens/loading';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBgsye9BlbkjS9KAsROKV9RCVXRqgJSg8Q",
  authDomain: "vanlangwallet.firebaseapp.com",
  databaseURL: "https://vanlangwallet.firebaseio.com",
  projectId: "vanlangwallet",
  storageBucket: "vanlangwallet.appspot.com",
  messagingSenderId: "537777680801",
  appId: "1:537777680801:web:04b0302adf252ddc289be0",
  measurementId: "G-LZ27SF9Y7J"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const AppContainer = NavigationContainer(AppNavigator);
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default function App() {

  const homeTab = () => {


    return <Tab.Navigator activeColor="#212F3D">
      <Tab.Screen name="HOME" component={CategoryScreen} >
      </Tab.Screen>
      <Tab.Screen name="HISTORY OF TRANSACTION" component={History} ></Tab.Screen>
      <Tab.Screen name="SETTING" component={myWallet}></Tab.Screen>
    </Tab.Navigator>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={loading} ></Stack.Screen>

        <Stack.Screen name="Login" component={CategoriesScreen} ></Stack.Screen>
        <Stack.Screen name="Home" children={homeTab}></Stack.Screen>
        <Stack.Screen name="BarCodeScanner" component={ScanScreen}></Stack.Screen>
        <Stack.Screen name="Change password" component={ChangePass}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
