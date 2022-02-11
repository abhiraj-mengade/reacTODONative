import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Keyboard, StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './task';
import TaskInput from './taskinput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    let taski =[]
    taski.value = task
    taski.done = false;
    if (task == null) return;
    setTasks([...tasks, taski]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex)=>{
    tasks.pop(deleteIndex);
    setTasks(tasks.filter((index) => index != deleteIndex));
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Open Tasks</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <Task task={task} index={index} deleteTask={deleteTask} toggleTask={toggleTask} />
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInput addTask={addTask}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF8F1',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#313552',
    marginTop: 80,
    marginLeft: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  taskContainer: {
    marginBottom: 20,
    color: '#313552',
  },
})
