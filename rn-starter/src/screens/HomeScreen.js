import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Use this for recap of RN</Text>
            <Button
                title="Self introduction"
                onPress={() => {
                    props.navigation.navigate("Introduction");
                }}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate("Components");
                }}
            >
                <Text style={styles.buttonText}>Component screen demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate("List");
                }}
            >
                <Text style={styles.buttonText}>FlatList demo</Text>
            </TouchableOpacity>
            <Button
                title="Reusable component demo"
                onPress={() => {
                    props.navigation.navigate("ImageScrn");
                }}
            />
            <Button
                title="Counter demo"
                onPress={() => {
                    props.navigation.navigate("Counter");
                }}
            />
            <Button
                title="Counter with reducer demo"
                onPress={() => {
                    props.navigation.navigate("Reducer");
                }}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate("ColorScrn");
                }}
            >
                <Text style={styles.buttonText}>Random color generation demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate("Picker");
                }}
            >
                <Text style={styles.buttonText}>Color picker demo</Text>
            </TouchableOpacity>
            <Button
                title="Text input demo"
                onPress={() => {
                    props.navigation.navigate("Text");
                }}
            />
            <Button
                title="Box Object Model demo"
                onPress={() => {
                    props.navigation.navigate("Box");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: "black",
        textAlign: "center",
    },
    buttonText: {
        textAlign: "center",
    },
    buttonStyle: {
        alignSelf: "center",
        marginVertical: 5,
        width: "50%",
        borderWidth: 1,
        borderColor: "blue",
        backgroundColor: "#00CDFF",
    },
});

export default HomeScreen;
