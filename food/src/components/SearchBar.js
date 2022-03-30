import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ text, onTextChange,onSearchStart }) => {
    return (
        <View style={styles.searchBarStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={{ fontSize: 25, flex: 1 }}
                value={text}
                onChangeText={(change) => {
                    onTextChange(change);
                }}
                onEndEditing={()=>{onSearchStart(text)}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarStyle: {
        backgroundColor: "#F0EEEE",
        height: 45,
        margin: 15,
        borderRadius: 5,
        flexDirection: "row",
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
});

export default SearchBar;
