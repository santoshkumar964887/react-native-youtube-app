import React from "react";
import { Text, View,StyleSheet} from "react-native";
export default  ExploreCard = ({ name }) => {
    return (
      <View>
        <Text style={styles.card}>{name}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    card: {
      width: 160,
      height: 50,
      backgroundColor: "red",
      textAlign: "center",
      marginTop:10,
      padding:10,
      fontSize:18,
      fontWeight:"700",
      color:"white",
      borderRadius:4
    }});