import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import CategoriesScreen from '../SmallDeMo/screens/Categories';
import CategoryScreen from '../SmallDeMo/screens/Category';
import ScanScreen from './screens/ScanScreen';
import History from '../SmallDeMo/screens/tabs/history';
import myWallet from '../SmallDeMo/screens/tabs/myWallet';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cam from '../SmallDeMo/screens/Cam';


// const AppContainer = NavigationContainer(AppNavigator);
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default function App() {

  const homeTab = () => {


    return <Tab.Navigator>
      <Tab.Screen name="Home" component={CategoryScreen} ></Tab.Screen>
      <Tab.Screen name="History of transaction" component={History} ></Tab.Screen>
      <Tab.Screen name="Settings" component={myWallet}></Tab.Screen>
    </Tab.Navigator>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={CategoriesScreen} ></Stack.Screen>
        <Stack.Screen name="Home" children={homeTab}></Stack.Screen>
        <Stack.Screen name="BarCodeScanner" component={ScanScreen}></Stack.Screen>
        <Stack.Screen name="Cam" component={Cam}></Stack.Screen>

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
