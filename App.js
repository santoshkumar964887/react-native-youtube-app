import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/page/Home";
import SearchPage from './src/page/Searchs';

export default function App() {
  return <View >
    {/* <HomePage/> */}
    <SearchPage/>
  </View>;
}

const styles = StyleSheet.create({
 
});
