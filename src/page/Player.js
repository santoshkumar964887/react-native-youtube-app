import React from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";

export default function Player() {
  return (
    <View>
      <Header />
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    margin:10,
    width:Dimensions.get("screen").width-50,
  }
});
