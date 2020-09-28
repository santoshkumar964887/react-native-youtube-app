import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constant from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftIcon}>
        <FontAwesome5
          style={styles.youtubeIcon}
          name="youtube"
          size={30}
          color="red"
        />
        <Text style={styles.youtubeText}>YouTube</Text>
      </View>
      <View style={styles.rightIcons}>
        <FontAwesome name="video-camera" size={26} color="#4A4D4F" />
        <FontAwesome5 name="search" size={26} color="#4A4D4F" />
        <MaterialIcons name="account-circle" size={26} color="#4A4D4F" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Constant.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
   backgroundColor:"#EEF0F1",
    elevation:6,
  },
  leftIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  youtubeText: {
    margin: 17,
    fontSize: 17,
    fontWeight: "800",
    marginLeft: 0,
  },
  youtubeIcon: {
    margin: 15,
  },
  rightIcons: {
    margin: 15,
    display: "flex",
    flexDirection: "row",
    width: 150,
    justifyContent: "space-around",
  },
  header: {
    color: "red",
  },
});
