import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Task({ task, index, deleteTask, toggleTask }) {
    return (
        <View style={styles.task}>
            <TouchableOpacity onPress={() => toggleTask(index)}>
                <MaterialIcons name={task.done ? "check-box" : "check-box-outline-blank"} size={30} color="green" />
            </TouchableOpacity>
        <Text style={[styles.text, task.done && styles.done]}>{task.value}</Text>
        <TouchableOpacity onPress={() => deleteTask(index)}>
            <MaterialIcons name="delete" size={30} color="#C62828" />
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
        task: {
            backgroundColor: '#FBF8F1',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            flexDirection: 'row',
            justifyContent: 'left',
        },
        text: {
            fontSize: 20,
            color: '#362706',
        },
        done: {
            textDecorationLine: 'line-through',
            color: 'grey',
        },
    });