import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [photos, setPhotos] = useState([]);
    const id = navigation.getParam("id");
    const onDetailSearch = (term) => {
        yelp.get(`/${term}`)
            .then((res) => {
                setPhotos(res.data.photos);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        onDetailSearch(id);
    }, []);

    return (
        <View>
            <FlatList
                data={photos}
                keyExtractor={(photo) => {
                    return photo;
                }}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item }}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        margin: 15,
        width: 250,
        height: 150,
    },
});

export default ResultsShowScreen;
