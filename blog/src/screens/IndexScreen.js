import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import BlogContext from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
    const { data, dispatch } = useContext(BlogContext);

    return (
        <>
            <Button
                title="press to add"
                onPress={() => {
                    dispatch({
                        type: "add",
                        payload: {
                            title: `post#${data.length + 1}`,
                            body: "something",
                        },
                    });
                }}
            />
            {data.length == 0 ? null : (
                <View style={{ borderBottomWidth: 1, marginTop: 15 }} />
            )}

            <FlatList
                data={data}
                keyExtractor={(blog) => blog.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.blogReview}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity
                                    style={{ padding: 10 }}
                                    onPress={() => {
                                        navigation.navigate("Show");
                                    }}
                                >
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {}}
                                    style={{ padding: 10 }}
                                >
                                    <AntDesign
                                        name="delete"
                                        style={styles.iconStyle}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    blogReview: {
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
    },
    iconStyle: { fontSize: 20 },
});

export default withNavigation(IndexScreen);
