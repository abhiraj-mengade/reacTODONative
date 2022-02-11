import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TaskInput({ addTask }) {
    const [text, setText] = useState('');

    const handleChange = (text) => {
        setText(text);
    }

    const handleSubmit = () => {
        if (text.length > 0) {
            addTask(text);
            setText('');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to add a new task"
                    value={text}
                    onChangeText={handleChange}
                />
                <TouchableOpacity onPress={handleSubmit}>
                    <MaterialIcons name="add" size={30} color="#313552" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF8F1',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },  
    input: {
        width: '80%',
        borderBottomColor: '#313552',
        borderBottomWidth: 1,
        fontSize: 20,
        color: '#313552',
    },
});
