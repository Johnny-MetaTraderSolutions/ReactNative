import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SelfIntroPage = () => {
    const name = "Johnny Qu";
    return (
        <View>
            <Text style={styles.headerStyle}>
                Getting started with react native!
            </Text>
            <Text style={styles.bodyStyle}>
                My name is {name}, passionate programmer who wants to make a
                difference of his own life.
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    headerStyle: { fontSize: 45 },
    bodyStyle: { fontSize: 20 },
});

export default SelfIntroPage;
