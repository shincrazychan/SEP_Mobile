import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import AppNavigator from '../SmallDeMo/AppNavigator';
import CategoriesScreen from '../SmallDeMo/screens/Categories';
import CategoryScreen from '../SmallDeMo/screens/Category';

// const AppContainer = NavigationContainer(AppNavigator);
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={CategoriesScreen} ></Stack.Screen>
        <Stack.Screen name="Home" component={CategoryScreen}></Stack.Screen>





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
