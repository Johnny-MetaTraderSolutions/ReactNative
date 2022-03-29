import React from "react";
import { View, Text, Button } from "react-native";

const COLOR_INCREMENT = 15

const ColorScheme = ({ color, value, onChange }) => {
    return (
        <View>
            <Text style={{ fontSize: 25, textAlign: "center" }}>{color} - {value}</Text>
            <Button
                title= {`More ${color}`}
                onPress={() => {
                    onChange(value>255-COLOR_INCREMENT?255:value+COLOR_INCREMENT)
                }}
            />
            <Button
                title= {`Less ${color}`}
                
                onPress={() => {
                    onChange(value<COLOR_INCREMENT?0:value-COLOR_INCREMENT)
                }}
            />
        </View>
    );
};

export default ColorScheme;
