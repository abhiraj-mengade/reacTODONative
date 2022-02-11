import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Task({ task, index, deleteTask }) {
    return (
        <View style={styles.task}>
        <Text style={[styles.text]}>{task}</Text>
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
            justifyContent: 'space-between',
        },
        text: {
            fontSize: 20,
            color: '#362706',
        },
    });