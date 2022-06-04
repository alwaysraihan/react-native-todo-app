import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";

const Notes = () => {
    const [allTask, setAllTask] = useState([
        { id: "54564564", value: "Hello, Is everything okay?" },
        { id: "5456456664", value: "Hello, Is everything okay?" },
        { id: "5456466564", value: "Hello, Is everything okay?" },
    ]);
    const [newTask, setNewTask] = useState("");
    const addNewTaskToList = () => {
        setAllTask([
            ...allTask,
            { id: Math.random().toString(), value: newTask },
        ]);
    };
    const addNewTask = (enteredText) => {
        setNewTask(enteredText);
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/Images/raychan.jpg")}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter a new task"
                        onChange={addNewTask}
                        value={newTask}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",

                        width: "80%",
                        marginTop: 30,
                        marginHorizontal: "auto",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setNewTask("");
                        }}
                        style={styles.butonDesign}
                    >
                        <Text style={styles.buttonText}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            addNewTaskToList();
                        }}
                        style={styles.butonDesign}
                    >
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={allTask}
                        renderItem={(itemData) => {
                            <ScrollView>
                                <View>
                                    <Text>{itemData.item.value}</Text>
                                </View>
                                ;
                            </ScrollView>;
                        }}
                    />
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
    inputBox: {
        width: "80%",
        height: 50,
        borderWidth: 5,
        borderColor: "rgba(230,191,131,0.7))",
        marginTop: 100,
        fontSize: 25,
        paddingHorizontal: 10,
    },
    butonDesign: {
        backgroundColor: "rgba(230,191,131,0.3)",
        width: 80,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 25,
        textAlign: "center",
    },
});
export default Notes;
