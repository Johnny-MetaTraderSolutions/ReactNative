import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [text,setText] = useState("")
    const [password,setPassword] = useState("")
    return (
        <View>
            <Text style = {{fontSize:20}}>Enter Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="type your name here"
                autoCorrect={false}
                autoCapitalize = "none"
                value={text}
                onChangeText= {(t)=>{setText(t)}}
            />
            {text.length>0?<Text>Hi, {text}</Text>:null}
            <Text style = {{fontSize:20}}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="type your password here"
                autoCorrect={false}
                autoCapitalize = "none"
                value={password}
                onChangeText= {(t)=>{setPassword(t)}}
            />
            {password.length>5?null:<Text>Password must be longer than 5 characters.</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
});

export default TextScreen;
