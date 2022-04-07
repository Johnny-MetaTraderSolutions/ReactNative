import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(Context);

    return (
        <>
            <Button
                title="press to add"
                onPress={() => {
                    dispatch({
                        type: "add",
                        payload: {
                            title: `post#${state.length + 1}`,
                            body: "something",
                        },
                    });
                }}
            />
            {state.length == 0 ? null : (
                <View style={{ borderBottomWidth: 1, marginTop: 15 }} />
            )}

            <FlatList
                data={state}
                keyExtractor={(blog) => blog.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.blogReview}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity
                                    style={{ padding: 10 }}
                                    onPress={() => {
                                        navigation.navigate("Show",{item:item});
                                    }}
                                >
                                    <Text>
                                        {item.title} - {item.id}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch({
                                            type: "delete",
                                            payload: item.id ,
                                        });
                                    }}
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
