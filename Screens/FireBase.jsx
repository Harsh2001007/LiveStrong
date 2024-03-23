import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function Firebase() {
  const [myData, setMyData] = useState('');

  useEffect(() => {
    getDB();
  }, []);

  const getDB = async () => {
    try {
      const data = await firestore()
        .collection('testingDB')
        .doc('nhxuxiUr6C4QRAQfAPZD')
        .get();
      console.log(data._data);
      setMyData(data._data);
    } catch (err) {
      console.log('the error while loading DB ->', err);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello firebase</Text>
        <TouchableOpacity
          style={{borderColor: 'red', borderWidth: 2}}
          onPress={() => {
            console.log('button clicked');
          }}>
          <Text>click me</Text>
          <Text>{myData ? myData.name : 'Loading'}</Text>
          <Text>{myData ? myData.age : 'Loading'}</Text>
          <Text>{myData ? myData.height : 'Loading'}</Text>
          <Text>{myData ? myData.weight : 'Loading'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
