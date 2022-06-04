import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
} from "react-native";
import React from "react";

const Notes = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/Images/raychan.jpg")}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
                <View>
                    <TextInput></TextInput>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
export default Notes;
