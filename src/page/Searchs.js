import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  FlatList,
  SafeAreaView
} from "react-native";
import Constant from "expo-constants";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import SearchCard from "../components/SearchCard";
import { useNavigation } from '@react-navigation/native';
export default Search = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const [results, setresult] = useState([]);
  const [indicator, setIndicator] = useState(false);
  const fetchingData = () => {
    setIndicator(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${text}&type=video&key=AIzaSyAkHz54DifEWSsHb0gSZlTN0HDwUE8Hsxk`
    )
      .then((res) => res.json())
      .then((res2) => {
        setIndicator(false);
        setresult(res2.items);
        setText("");
      });
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.header}>
        <View style={styles.headerleft}>
          <MaterialIcons
            style={styles.arrow}
            name="keyboard-backspace"
            size={33}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View>
            <TextInput
              style={styles.searchHeader}
              value={text}
              placeholder="Search articles"
              onChangeText={(text) => setText(text)}
            />
          </View>
        </View>
        <View style={styles.headerRightIcons}>
          <Feather
            onPress={() => fetchingData()}
            style={styles.headerRightIcon}
            name="send"
            size={24}
            color="black"
          />
          <Ionicons
            style={styles.headerRightIcon}
            name="md-mic"
            size={24}
            color="black"
          />
        </View>
      </View>
      {
        indicator?<ActivityIndicator color="green" size="large"/>:null
      }
      <SafeAreaView>
        <FlatList
          data={results}
          renderItem={({ item }) => {
            return <SearchCard  
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle} />;
          }}
          keyExtractor={item=>item.id.videoId}
        />
      
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    marginTop: Constant.statusBarHeight + 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EEF0F1",
    elevation: 6,
  },
  headerleft: {
    display: "flex",
    flexDirection: "row",
  },
  arrow: {
    marginLeft: 10,
    marginTop: 3,
  },
  searchHeader: {
    padding: 10,
    width: "160%",
    height: 40,
    margin: 3,
    borderRadius: 3,
    backgroundColor: "white",
  },
  headerRightIcons: {
    display: "flex",
    flexDirection: "row",
  },
  headerRightIcon: {
    marginTop: 7,
    marginRight: 20,
  },
});
