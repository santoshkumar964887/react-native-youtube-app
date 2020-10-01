import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import HomeCard from "../components/homeCard";
import Header from "../components/Header";
import { useSelector } from "react-redux";
export default HomePage = () => {
  const state = useSelector((state) => {
    return state.stateReducer;
  });
  return (
    <View>
      <Header />
      <SafeAreaView>
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
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {},
});
