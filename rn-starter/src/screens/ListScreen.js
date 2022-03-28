import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: "20" },
        { name: "Friend #2", age: "45" },
        { name: "Friend #3", age: "32" },
        { name: "Friend #4", age: "27" },
        { name: "Friend #5", age: "53" },
        { name: "Friend #6", age: "30" },
        { name: "Friend #7", age: "1" },
        { name: "Friend #8", age: "7" },
        { name: "Friend #9", age: "9" },
    ];
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator = {false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={(friend) => {
                return (
                    <Text style={styles.textStyle}>
                        {friend.item.name} - Age {friend.item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: { marginVertical: 5, borderColor: "lightblue", borderWidth: 2 },
});

export default ListScreen;
