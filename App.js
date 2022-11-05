import React, { useState } from 'react';

import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);

  }
const completeTask=(index)=>{
  let itemsCopy=[...taskItems];
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);
}
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My Todo List</Text>

        <View style={styles.item}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }

        </View>

      </View>


      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C5B9'
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20
  },
  sectionTitle: { fontSize: 30, fontWeight: 'bold' ,textAlign:'center'},
  item: { marginTop: 10, padding: 1 },

  writeTaskWrapper: {
    position: 'absolute', bottom: 60, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
  },
  input: {
    paddingVertical: 15, width: 250, paddingHorizontal: 15, backgroundColor: '#fff', borderRadius: 60, borderColor: '#C0C0C0', borderWidth: 1,
  },
  addWrapper: {

    width: 60, height: 60, backgroundColor: '#fff', borderRadius: 60, borderColor: '#C0C0C0', alignItems: 'center', justifyContent: 'space-around', borderWidth: 1
  },
  addText: {
    fontSize: 30, fontWeight: 'bold', opacity: 0.5
  },


});
