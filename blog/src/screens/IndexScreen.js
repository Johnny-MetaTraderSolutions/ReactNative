import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(Context);

    return (
        <>
            <Button
                title="press to add"
                onPress={() => {
                    let newId = Math.floor(Math.random() * 99999);
                    dispatch({
                        type: "add",
                        payload: {
                            id: newId,
                            title: "",
                            body: "",
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
                                        navigation.navigate("Show", {
                                            blog: item,
                                        });
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
                                            payload: item.id,
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

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    let newId = Math.floor(Math.random() * 99999);

                    navigation.navigate("Edit", { newBlog: true, id: newId });
                }}
            >
                <AntDesign
                    name="plus"
                    style={{ fontSize: 25, marginRight: 10 }}
                />
            </TouchableOpacity>
        ),
    };
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

export default IndexScreen;
