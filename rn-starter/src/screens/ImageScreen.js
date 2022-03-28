import React from "react";
import { FlatList } from "react-native";
import {} from "react-native-gesture-handler";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    const imgList = [
        {
            title: "Forest",
            imageSource: require("../../assets/forest.jpg"),
            score: "9",
        },
        {
            title: "Beach",
            imageSource: require("../../assets/beach.jpg"),
            score: "7",
        },
        {
            title: "Mountain",
            imageSource: require("../../assets/mountain.jpg"),
            score: "4",
        },
    ];
    return (
        <FlatList
            keyExtractor={(img) => img.title}
            data={imgList}
            renderItem={({ item }) => {
                return <ImageDetail {...item} />;
            }}
        />
    );
};

export default ImageScreen;
