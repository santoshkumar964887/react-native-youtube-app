import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
export default HomeCard = (props) => {
  const { colors } = useTheme();
  const textColor = colors.iconColor;
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("player", {
            videoId: props.videoId,
            title: props.title,
          })
        }
      >
        <View>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
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
              color={textColor}
            />
          </View>
          <View>
            <Text
              style={{
                width: Dimensions.get("screen").width - 50,
                fontSize: 14,
                fontWeight: "700",
                color: textColor,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <Text
              style={{
                width: Dimensions.get("screen").width - 55,
                fontSize: 12,
                fontWeight: "600",
                color: textColor,
                marginBottom: 25,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.channel}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
  },
});
