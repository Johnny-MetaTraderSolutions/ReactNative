import React from "react";
import { Text, StyleSheet, View,Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Use this for recap of RN</Text>
            <Button
              title = "Self introduction"
              onPress={()=>{props.navigation.navigate("Introduction")}}
            />
            <TouchableOpacity  style = {styles.buttonStyle}
            onPress={()=>{props.navigation.navigate("Components")}}
            >
              <Text style = {styles.buttonText}>Component screen demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle}
           onPress={()=>{props.navigation.navigate("List")}}>
              <Text style = {styles.buttonText}>FlatList demo</Text>
            </TouchableOpacity>
            <Button
              title = "Reusable component demo"
              onPress={()=>{props.navigation.navigate("ImageScrn")}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: "black",
        textAlign: "center",
    },
    buttonText:{
      textAlign:"center",
    },
    buttonStyle:{
      alignSelf:"center",
      marginVertical: 5,
      width:"50%",
      borderWidth:1,
      borderColor:"blue",
      backgroundColor:'#00CDFF',
    },
});

export default HomeScreen;
