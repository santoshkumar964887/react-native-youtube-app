import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Constant from 'expo-constants';
export default Header=()=>{
    return(
        <View style={styles.headerContainer}>
            <FontAwesome5 name="youtube" size={24} color="black" />
            <Text style={styles.header}>Hello from header</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    headerContainer:{
        marginTop:Constant.statusBarHeight
    },
    header:{
        color:"red"
    }
})