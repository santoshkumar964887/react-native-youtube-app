import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/page/Home";
import SearchPage from './src/page/Searchs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const stack=createStackNavigator();
const tab=createBottomTabNavigator();
export default function App() {
  return <View >
    <NavigationContainer>
      <stack.Navigator headerMode="none">

      </stack.Navigator>
    </NavigationContainer>
   
  </View>;
}

const styles = StyleSheet.create({
 
});
