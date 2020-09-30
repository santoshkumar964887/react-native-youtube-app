import React from "react";
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'
export default function Player({ route }) {
  const { videoId, title } = route.params;
  const navigation=useNavigation();
  return (
    <View>
      <Header />
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      
      <View  style={styles.backButton}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.backButtonStyle}>
        <AntDesign name="back" size={30} color="white" />
        <Text style={{color:"white"}}>Go Back</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    width: "100%",
    backgroundColor: "gray",
    color: "white",
    fontWeight: "700",
    elevation: 6,
  },
  backButton:{
    display:"flex",
    alignItems:"center",
    marginTop:30,
    
  },
  backButtonStyle:{
    backgroundColor:"#0057BF",
    padding:10,
    borderRadius:4,
    color:"white",
    elevation:10
  }
});
