import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function Diet() {
  const [goalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, goalText]);
  }

  function resetGoals() {
    setCourseGoals([]);
  }
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="enter you goal"
            style={{
              borderColor: 'grey',
              borderWidth: 2,
              height: '70%',
              width: '70%',
              paddingHorizontal: 6,
            }}
            onChangeText={goalInputHandler}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'lightblue',
              justifyContent: 'center',
              marginLeft: 10,
              height: '70%',
            }}
            onPress={addGoalHandler}>
            <Text style={{paddingHorizontal: 10}}>Add Goal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.goalsConatainer}>
          <Text>Added Goals</Text>
          {courseGoals.map(goals => (
            <View style={styles.goalItems}>
              <Text style={{color: 'black'}} key={goals}>
                {goals}
              </Text>
            </View>
          ))}
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              width: '20%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={resetGoals}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    height: '10%',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginTop: 14,
  },
  goalItems: {
    margin: 8,
    backgroundColor: 'lightblue',
    height: 40,
    justifyContent: 'center',
    padding: 10,
    width: 50,
    flexWrap: 'wrap',
  },
});
