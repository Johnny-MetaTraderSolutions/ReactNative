import React, { useEffect,useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
            <Text>{photos} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
