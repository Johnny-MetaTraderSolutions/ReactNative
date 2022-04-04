import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultCard from "./ResultCard";
import { withNavigation } from "react-navigation";

const RestaurantList = ({ results, category, navigation }) => {
    if (!results.length){
        return null
    }
    return (
        <View style = {{marginBottom:10}}>
            <Text style={styles.categoryStyle}>{category}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => {
                    return result.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ResultShow", {
                                    id: item.id,
                                })
                            }
                        >
                            <ResultCard
                                name={item.name}
                                img={item.image_url}
                                rating={item.rating}
                                reviewCount={item.review_count}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoryStyle: {
        marginLeft: 15,
        fontSize: 25,
        fontWeight: "bold",
    },
});

export default withNavigation(RestaurantList);
