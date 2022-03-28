import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";
import ColorBox from "../components/ColorCard";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColors([
                        ...colors,
                        "rgb(" +
                            Math.floor(Math.random() * 255) +
                            "," +Math.floor(Math.random()*(255))+
                            "," +Math.floor(Math.random()*(255))+
                            ")",
                    ]);
                }}
            />
            <FlatList
                keyExtractor={(_, index) => index}
                data={colors}
                renderItem={({item}) => {
                    return (<ColorBox color = {item}/>)
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorScreen;
