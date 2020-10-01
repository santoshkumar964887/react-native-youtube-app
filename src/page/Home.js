import React,{useState,useEffect} from "react";
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
import { useSelector,useDispatch } from "react-redux";
export default HomePage = () => {
  const dispatch=useDispatch();
  const[data,setData]=useState([]);
  const state = useSelector((state) => {
    return state.stateReducer;
  });
  useEffect(()=>{
    const API_KEY="AIzaSyANA9yKxcTtRniK_4jCEjUOi1S7ehuTfkc";
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=News&type=video&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res2) => {
        
        dispatch({type:'Add_Search',payload:res2.items});
        setData(res2.items);
       
        
      });
  },[])
 const result= state.length>0?state:data;
  return (
    <View>
      <Header />
      <SafeAreaView>
        <FlatList
          data={result}
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
