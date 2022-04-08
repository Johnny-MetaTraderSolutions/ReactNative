import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const newBlog = navigation.getParam("newBlog");
    const id = navigation.getParam("id");
    const { state, dispatch } = useContext(Context);
    const [blogInfo, setBlogInfo] = useState(
        newBlog
            ? { id, title: "", body: "" }
            : state.filter((blog) => blog.id === id)
    );
    return (
        <View style={styles.viewAreaStyle}>
            <Text>{`Enter ${newBlog ? "New" : ""} Title:`}</Text>
            <TextInput value={blogInfo.title} onChangeText = {()=>{}}/>
            <Text>{`Enter ${newBlog ? "New" : ""} Content:`}</Text>
            <TextInput value={blogInfo.body} onChangeText = {()=>{}}/>
            <Button
                title="Save"
                onPress={() => {
                    dispatch({
                        type: "save",
                        payload: {
                            blogInfo,
                        },
                    });
                    navigation.navigate("Index");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({ viewAreaStyle: { paddingTop: 15 } });

export default EditScreen;
