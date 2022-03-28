import React,{useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [counter,setCounter] = useState(0)
    return (
        <View>
            <Text style={styles.textStyle}>Current Count:</Text>
            <Text style={styles.textStyle}>{counter}</Text>
            <Button title="increase" onPress={()=>{setCounter(counter+1)}}/>
            <Button title="decrease" onPress={()=>{setCounter(counter-1)}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        fontSize: 30,
    },
});

export default CounterScreen;
