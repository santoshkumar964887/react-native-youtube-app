import React from "react";
import { Text, View, Image, StyleSheet,Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default HomeCard = () => {
  return (
    <View> 
      <View>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            height: 200,
            width: "100%",
          }}
        />
      </View>
      <View style={styles.footer}>
        <View>
          <MaterialIcons
            style={styles.sideIcon}
            name="account-circle"
            size={50}
            color="#4A4D4F"
          />
        </View>
        <View>
          <Text style={styles.title}
          ellipsizeMode="tail"
          numberOfLines={2}
          >
            HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard
            HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard
            HomeCard
          </Text>
          <Text style={styles.disc}
          numberOfLines={1}
          ellipsizeMode="tail"
          >HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard HomeCard</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
  },
  title: {
      width: Dimensions.get("screen").width-50,
    fontSize: 14,
    fontWeight: "700",
    color:"#555555"
  },
  disc:{
    width: Dimensions.get("screen").width-55,
    fontSize: 12,
    fontWeight: "600",
    color:"#818181",
    marginBottom:25

  }
});
