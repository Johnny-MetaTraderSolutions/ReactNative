import React, { useState } from 'react'
import { View,StyleSheet } from 'react-native'
import ColorScheme from '../components/ColorScheme'
import ColorBox from '../components/ColorCard'

const ColorPicker= ()=>{
    const [red,setRed] = useState(127)
    const [green,setGreen] = useState(127)
    const [blue,setBlue] = useState(127)
    return <View>
        <ColorScheme color = "Red" value = {red} onChange = {setRed}/>
        <ColorScheme color = "Green" value = {green} onChange = {setGreen}/>
        <ColorScheme color = "Blue" value = {blue} onChange = {setBlue}/>
        <ColorBox color = {`rgb(${red},${green},${blue})`}/>
    </View>
}

const styles = StyleSheet.create({})

export default ColorPicker