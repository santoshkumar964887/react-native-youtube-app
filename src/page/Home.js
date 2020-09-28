import React from "react";
import { View, Text,StyleSheet,ScrollView} from "react-native";
import HomeCard from '../components/homeCard';
import Header from "../components/Header";
export default HomePage = () => {
  return (
    <View style={styles.home}>
      <Header />
      <ScrollView>
      
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        
        
      </ScrollView>
    </View>
  );
};
const styles=StyleSheet.create({
   home:{
    
   }
})
