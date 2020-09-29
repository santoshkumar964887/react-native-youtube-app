import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/page/Home";
import SearchPage from "./src/page/Searchs";
import Explore from "./src/page/Explore";
import Player from "./src/page/Player";
import Suscribe from "./src/page/Subscribe";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

const stack = createStackNavigator();
const tab = createBottomTabNavigator();
const Root = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "subscribe") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "darkred",
        inactiveTintColor: "gray",
      }}
    >
      <tab.Screen name="home" component={HomePage} />
      <tab.Screen name="explore" component={Explore} />
      <tab.Screen name="subscribe" component={Suscribe} />
    </tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none">
        <stack.Screen name="root" component={Root} />
        <stack.Screen name="search" component={SearchPage} />
        <stack.Screen name="player" component={Player} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
