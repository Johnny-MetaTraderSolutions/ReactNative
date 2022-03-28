import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Current Count:</Text>
            <Text style={styles.textStyle}>0</Text>
            <Button title="increase" />
            <Button title="decrease" />
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
