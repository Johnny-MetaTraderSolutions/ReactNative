import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = <Text>Hello to you!</Text>
    const test = "this is a test"
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      {greeting}
      <Text>{test}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
