import React from 'react'
import { View,StyleSheet } from 'react-native'


const ColorBox= ({color})=>{
    return <View style = {[styles.colorBoxStyle,{backgroundColor: color}]}/>
}

const styles = StyleSheet.create({
    colorBoxStyle:{
        height:100,
        width:100,
    },
})

export default ColorBox