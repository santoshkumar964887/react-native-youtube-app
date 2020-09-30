import React from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";

export default function Player({route}) {
  const { videoId,title}=route.params;
  return (
    <View>
      <Header />
      <View style={{
               width:"100%",
               height:300
           }}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
      </View>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    padding:10,
    width:"100%",
    backgroundColor:"gray",
    color:"white",
    fontWeight:"700",
    elevation:6
  }
});
