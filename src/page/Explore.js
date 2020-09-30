import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ExploreCard from "../components/ExploreCard";
import HomeCard from "../components/homeCard";
export default function Explore() {
  const state = useSelector((state) => {
    return state;
  });
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView >
        <View style={styles.cardContainer}>
          <ExploreCard name="Gaming" />
          <ExploreCard name="Trending" />
          <ExploreCard name="Music" />
          <ExploreCard name="News" />
          <ExploreCard name="Movies" />
          <ExploreCard name="Fashion" />
        </View>
      
      <Text style={styles.horzantialLine}>Trending videos this week</Text>
      
        <FlatList
          data={state}
          renderItem={({ item }) => {
            return (
              <HomeCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 50,
    backgroundColor: "red",
    textAlign: "center",
    marginTop: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    borderRadius: 4,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  horzantialLine: {
    borderBottomColor: "gray",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    padding: 10,
    color: "#212121",
    opacity: 0.8,
    borderBottomWidth: 2,
  },
});
