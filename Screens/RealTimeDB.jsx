import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/firestore';

export default function RealTimeDB() {
  const [myRTData, setMyRTData] = useState('');
  const [inputData, setInputData] = useState('');
  const [list, setList] = useState('');

  const handleAdd = inputs => {
    setInputData(inputs);
  };

  const handleAddData = async () => {
    try {
      const response = await firebase
        .app()
        .database(
          'https://testlivestrong-default-rtdb.asia-southeast1.firebasedatabase.app/',
        )
        .ref('users/1')
        .set({
          value: inputData,
          name: 'harsh',
        });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     rtDatabase();
  //   }, []);

  //   const rtDatabase = async () => {
  //     try {
  //         const data = await firebase
  //           .app()
  //           .database(
  //             'https://testlivestrong-default-rtdb.asia-southeast1.firebasedatabase.app/',
  //           )
  //           .ref('users/1')
  //           .once('value');
  //         setMyRTData(data.val());
  //     } catch (error) {
  //       console.log('database error ->', error);
  //     }
  //   };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 32}}>TO DO APP</Text>
      <TextInput
        style={styles.inputs}
        value={inputData}
        onChangeText={handleAdd}
      />
      <TouchableOpacity style={styles.addBtn} onPress={handleAddData}>
        <Text style={{color: 'white', fontSize: 20}}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  addBtn: {
    borderColor: 'blue',
    backgroundColor: 'crimson',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginTop: 10,
  },
});
