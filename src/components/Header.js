import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constant from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import {useDispatch} from 'react-redux';
export default Header = () => {
  const { colors } = useTheme();
  const dispatch=useDispatch();
  const headerBackgroundColor = colors.headerColor;
  const iconColor = colors.iconColor;
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: headerBackgroundColor,
        elevation: 6,
      }}
    >
      <View style={styles.leftIcon}>
        <FontAwesome5
          style={styles.youtubeIcon}
          name="youtube"
          size={30}
          color="red"
        />
        <Text
          style={{ margin: 17, fontSize: 17,color:iconColor, fontWeight: "800", marginLeft: 0 }}
        >
          YouTube
        </Text>
      </View>
      <View style={styles.rightIcons}>
        <FontAwesome name="video-camera" size={26} color={iconColor} />
        <FontAwesome5
          onPress={() => {
            navigation.navigate("search");
          }}
          name="search"
          size={26}
          color={iconColor}
        />
        <MaterialIcons onPress={()=>dispatch({type:"Change_Theme"})} name="account-circle" size={26} color={iconColor} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  leftIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
