import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultCard = ({ img, name, rating, reviewCount }) => {
    return (
        <View style={styles.cardViewStyle}>
            <Image style={styles.imageStyle} source={{ uri: img }} />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text
                style={styles.ratingStyle}
            >{`${rating} Stars, ${reviewCount} Reviews`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardViewStyle: {
        marginLeft: 15,
    },
    imageStyle: {
        marginRight: 20,
        marginVertical: 10,
        width: 250,
        height: 150,
    },
    nameStyle: {
        width: 250,
        fontWeight: "bold",
        fontSize: 18,
    },
    ratingStyle: {
        fontSize: 15,
        marginVertical: 5,
        color: "grey",
    },
});

export default ResultCard;
