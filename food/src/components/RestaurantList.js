import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RestaurantList = ({category}) => {
    return (
        <View>
            <Text style = {styles.categoryStyle}>{category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryStyle:{
        fontSize:25,
        fontWeight:"bold",
    }
});

export default RestaurantList;
