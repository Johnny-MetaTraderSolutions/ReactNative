import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const newBlog = navigation.getParam("newBlog");
    const id = navigation.getParam("id");
    const { state, dispatch } = useContext(Context);
    const [blogInfo, setBlogInfo] = useState(
        newBlog
            ? { id, title: "", body: "" }
            : state.find((blog) => blog.id === id)
    );
    return (
        <View style={styles.viewAreaStyle}>
            <Text style={styles.inputTitleStyle}>{`Enter ${
                newBlog ? "" : "New"
            } Title:`}</Text>
            <TextInput
                value={blogInfo.title}
                style={styles.inputFieldStyle}
                onChangeText={(change) => {
                    setBlogInfo({ ...blogInfo, title: change });
                }}
            />
            <Text style={styles.inputTitleStyle}>{`Enter ${
                newBlog ? "" : "New"
            } Content:`}</Text>
            <TextInput
                value={blogInfo.body}
                style={styles.inputFieldStyle}
                onChangeText={(change) => {
                    setBlogInfo({ ...blogInfo, body: change });
                }}
            />
            <TouchableOpacity
                style={styles.saveButtonStyle}
                onPress={() => {
                    dispatch({
                        type: "save",
                        payload: {
                            blogInfo,
                            newBlog,
                        },
                    });

                    navigation.navigate("Index");
                }}
            >
                <Text style={styles.buttonTextStyle}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewAreaStyle: { paddingTop: 15 },
    inputTitleStyle: { fontSize: 24, marginTop: 10, marginHorizontal: 5 },
    inputFieldStyle: {
        borderWidth: 1,
        fontSize: 24,
        marginHorizontal: 2,
        padding: 5,
    },
    saveButtonStyle: { borderWidth: 1, marginTop: 30, marginHorizontal: "30%" },
    buttonTextStyle: { fontSize: 24, textAlign: "center" },
});

export default EditScreen;
