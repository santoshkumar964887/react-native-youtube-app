import React from "react";
import { View, Text,StyleSheet} from "react-native";
import Header from "../components/Header";
export default HomePage = () => {
  return (
    <View>
      <Header />
      <Text style={styles.home}>Hello</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    home:{
      textAlign:"center",
      margin: 75
    }
})
