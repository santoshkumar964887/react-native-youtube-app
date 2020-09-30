import React from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";

export default function Player() {
  return (
    <View>
      <Header />
      <View style={{
               width:"100%",
               height:200
           }}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
      </View>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
      <View style={{borderBottomWidth:2}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    margin:10,
    width:Dimensions.get("screen").width-50,
  }
});
