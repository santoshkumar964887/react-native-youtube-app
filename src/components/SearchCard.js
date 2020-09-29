import React from "react";
import { View, Text, StyleSheet,Image,Dimensions } from "react-native";
export default SearchCard = (props) => {
    
  return (
    <View style={styles.searchCardContainer}>
     
      <Image
      style={styles.image}
          source={{
            uri:
              `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
            height:92,
            width: "40%",
          }}
        />
      
      <View style={styles.text}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={3}>
          {props.title}
        </Text>
        <Text style={styles.disc} ellipsizeMode="tail" numberOfLines={2}>
          {props.channel}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchCardContainer: {
     display:"flex",
     flexDirection:"row"
  },
  image:{
      margin:10
  },
  text:{
      marginTop:7
  },
  title: {
    width: Dimensions.get("screen").width/2,
  fontSize: 14,
  fontWeight: "700",
  color:"#555555"
},
disc:{
    width: Dimensions.get("screen").width/2,
    fontSize: 12,
    fontWeight: "600",
    color:"#818181",
    marginBottom:25

  }
});
