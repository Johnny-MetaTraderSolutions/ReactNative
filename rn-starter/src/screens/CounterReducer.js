import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case "increase":
            return { value: state.value + action.payload };
        case "decrease":
            return { value: state.value - action.payload };
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return (
        <View>
            <Text style={styles.textStyle}>Current Count:</Text>
            <Text style={styles.textStyle}>{state.value}</Text>
            <Button
                title="increase"
                onPress={() => {
                    dispatch({ type: "increase", payload: 1 });
                }}
            />
            <Button
                title="decrease"
                onPress={() => {
                    dispatch({ type: "decrease", payload: 1 });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        fontSize: 30,
    },
});

export default CounterReducer;
