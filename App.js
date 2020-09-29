import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/page/Home";
import SearchPage from "./src/page/Searchs";
import Explore from "./src/page/Explore";
import Player from "./src/page/Player";
import Suscribe from "./src/page/Suscribe";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();
const Root=()=>{
  return(
    
    <tab.Navigator>
      <tab.Screen name="home" component={HomePage} />
      <tab.Screen name="explore" component={Explore} />
      <tab.Screen name="suscribe" component={Suscribe} />
    </tab.Navigator> 
    
  )
}
export default function App() {
  return (
  
      
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          <stack.Screen name="root" component={Root}/>
          <stack.Screen name="search" component={SearchPage} />
          <stack.Screen name="player" component={Player} />
        </stack.Navigator>
      </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({});
