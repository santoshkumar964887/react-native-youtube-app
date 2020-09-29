import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,ScrollView} from "react-native";
import Constant from "expo-constants";
import { MaterialIcons, Ionicons, Feather} from "@expo/vector-icons";
import SearchCard from '../components/SearchCard';
export default Search = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.searchContainer}>
      <View style={styles.header}>
        <View style={styles.headerleft}>
        <MaterialIcons style={styles.arrow} name="keyboard-backspace" size={33} color="black" />
        <View>
        <TextInput
        style={styles.searchHeader}
          value={text}
          placeholder="Search articles"
          onChangeText={(text)=> setText(text)}
        /></View>
        </View>
        <View style={styles.headerRightIcons}>
        <Feather style={styles.headerRightIcon} name="send" size={24} color="black" />
        <Ionicons style={styles.headerRightIcon} name="md-mic" size={24} color="black" />
        </View>
      </View>
       <ScrollView>
         <SearchCard/>
         <SearchCard/>
         <SearchCard/>
         <SearchCard/>
         <SearchCard/>
         <SearchCard/>
         <SearchCard/>
         <SearchCard/>
       </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    marginTop: Constant.statusBarHeight+10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor:"#EEF0F1",
    elevation:6
  },
  headerleft:{
    display: "flex",
    flexDirection: "row",
  },
  arrow:{
    marginLeft:10,
    marginTop:3
    
  },
  searchHeader:{
    padding:10,
    width:"160%",
    height:40,
    margin:3,
    borderRadius:3,
    backgroundColor:"white"
  },
  headerRightIcons:{
    display: "flex",
    flexDirection: "row",
  },
  headerRightIcon:{
    marginTop:7,
    marginRight:20
  }
});
