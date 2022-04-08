import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
    const blog = navigation.getParam("blog");
    return (
        <View style={styles.blogViewStyle}>
            <Text style={styles.titleStyle}>
                {blog.title} - {blog.id}
            </Text>
            <Text style={styles.bodyStyle}>{blog.body}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    const blog = navigation.getParam("blog");
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Edit", { newBlog: false, id: blog.id });
                }}
            >
                <Entypo
                    name="pencil"
                    style={{ fontSize: 25, marginRight: 10 }}
                />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    blogViewStyle: {
        borderWidth: 1,
        marginVertical: 20,
        paddingVertical: 20,
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginVertical: 10,
    },
    bodyStyle: { marginVertical: 10, fontSize: 20 },
});

export default ShowScreen;
