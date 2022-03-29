import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const BoxLayout= ()=>{
    return <View style = {styles.viewStyle}>
        <Text style ={styles.textOneStyle}>Child #1</Text>
        <Text style ={styles.textTwoStyle}>Child #2</Text>
        <Text style ={styles.textThreeStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
        //alignItems, flexDirection are always add on the parent elements
        alignItems:'stretch',
        borderWidth:5,
        height:100,
        borderColor: "black",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    textOneStyle:{
        borderWidth:5,
        borderColor: "red",
        flex: 4
    },
    textTwoStyle:{
        borderWidth:5,
        borderColor: "red",
        flex: 3,
        // the next line of code is equivalent to the following:
        // position:"absolute",
        // top:0,
        // bottom:0,
        // left:0,
        // right:0,
        ...StyleSheet.absoluteFillObject,
    },
    textThreeStyle:{
        borderWidth:5,
        borderColor: "red",
        flex: 1,
        alignSelf: "center"
    },

})

export default BoxLayout