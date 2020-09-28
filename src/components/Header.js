import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default Header=()=>{
    return(
        <View>
            <Text style={styles.header}>Hello from header</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    header:{
        color:"red"
    }
})