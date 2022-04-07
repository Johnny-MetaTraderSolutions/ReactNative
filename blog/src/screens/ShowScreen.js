import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({ navigation }) => {
    const item = navigation.getParam("item");
    return (
        <View style={styles.blogViewStyle}>
            <Text style={styles.titleStyle}>
                this is the main page for {item.id}
                
            </Text>
            <Text>this is the main page for {item.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    blogViewStyle: {
        borderWidth: 1,
        marginVertical: 20,
        paddingVertical: 20,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight:"bold",
        
    },
});

export default ShowScreen;
