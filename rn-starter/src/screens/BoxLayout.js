import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const BoxLayout= ()=>{
    return <View style = {styles.viewStyle}>
        <Text style ={styles.textStyle}>Child #1</Text>
        <Text style ={styles.textStyle}>Child #2</Text>
        <Text style ={styles.textStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:5,
        borderColor: "black",
    },
    textStyle:{
        borderWidth:5,
        borderColor: "red",
    }

})

export default BoxLayout