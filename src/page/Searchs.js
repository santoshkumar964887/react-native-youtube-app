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
import { useNavigation,useTheme } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';
export default Search = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const { colors } = useTheme();
  const headerBackgroundColor = colors.headerColor;
  const iconColor = colors.iconColor;
  //const [results, setresult] = useState([]);
  const [indicator, setIndicator] = useState(false);
  const dispatch=useDispatch();
  const results=useSelector(state=>{
    return state;
  })
    const API_KEY="AIzaSyDHkXoVAssCrE2O5InS-nXr62oJRTXqs0E"
  const fetchingData = () => {
    setIndicator(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${text}&type=video&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res2) => {
        setIndicator(false);

        //setresult(res2.items);
        dispatch({type:'Add_Search',payload:res2.items});
        setText("");
      });
  };
  return (
    <View style={styles.searchContainer}>
      <View style={{display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:headerBackgroundColor,
    elevation: 6}}>
        <View style={styles.headerleft}>
          <MaterialIcons
            style={styles.arrow}
            name="keyboard-backspace"
            size={33}
            color={iconColor}
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
            color={iconColor}
          />
          <Ionicons
            style={styles.headerRightIcon}
            name="md-mic"
            size={24}
            color={iconColor}
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

  headerleft: {
    display: "flex",
    flexDirection: "row",
  },
  arrow: {
    marginLeft: 10,
    marginTop: 3,
  },
  searchHeader: {
    padding:10,
    width:220,
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
