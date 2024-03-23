import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  keyboard,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import React, {useRef, useState, useMemo} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '@gorhom/bottom-sheet';
import BmiBottomSheet from '../src/Components/BmiBottomSheet';

export default function Bmi({navigation}) {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [isMale, setIsMale] = useState(true);
  const [isFemale, setIsFemale] = useState(false);
  const [isKg, setIsKg] = useState(true);
  const [isLbs, setIsLbs] = useState(false);
  const [isMeter, setIsMeter] = useState(true);
  const [isFeet, setIsFeet] = useState(false);
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiAge, setBmiAge] = useState('');
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiGoal, setBmiGoal] = useState('');
  const [bmiValue, setBmiValue] = useState('');
  const [bmiType, setBmiType] = useState('');
  const [bmiDesc, setBmiDesc] = useState('');

  const maleSelect = () => {
    setIsMale(true);
    setIsFemale(false);
  };
  const femaleSelect = () => {
    setIsMale(false);
    setIsFemale(true);
  };

  const kgSelect = () => {
    setIsKg(true);
    setIsLbs(false);
  };

  const lbsSelect = () => {
    setIsLbs(true);
    setIsKg(false);
  };

  const meterSelect = () => {
    setIsMeter(true);
    setIsFeet(false);
  };

  const feetSelect = () => {
    setIsFeet(true);
    setIsMeter(false);
  };

  const weightInputHandler = enteredText => {
    setBmiWeight(enteredText);
    console.log(bmiWeight);
  };
  const ageInputHandler = enteredText => {
    setBmiAge(enteredText);
    console.log(bmiAge);
  };
  const heightInputHandler = enteredText => {
    setBmiHeight(enteredText);
    console.log(bmiHeight);
  };
  const goalInputHandler = enteredText => {
    setBmiGoal(enteredText);
    console.log(bmiGoal);
  };

  const calcBmi = () => {
    const num1 = parseFloat(bmiHeight);
    const num2 = parseFloat(bmiWeight);
    const result = num2 / num1 ** 2;
    console.log(result);
    setBmiValue(result.toFixed(1).toString());
    setBottomSheetVisible(true);

    switch (true) {
      case result < 18.5:
        setBmiType('under weight');
        setBmiDesc('Empower yourself to reach a healthy weight! 😓');
        break;

      case result > 18.5 && result < 25:
        setBmiType('Normal');
        setBmiDesc('Congratulations on maintaining a healthy weight! 😀');
        break;

      case result > 25 && result < 30:
        setBmiType('Over weight ');
        setBmiDesc('Start your journey towards a fitter, lighter you! 😣');
        break;

      case result > 30 && result < 40:
        setBmiType('Obesity');
        setBmiDesc("Let's rewrite the story of your health! 😵‍💫");
        break;

      default:
        setBmiType('Enter valid Details');
        break;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#2D3250'}}>
      <StatusBar backgroundColor={'#2D3250'} />
      {/* <KeyboardAvoidingView behavior="position" style={{height: '100%'}}> */}
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              width: '30%',
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={30}
              color="white"
            />
            <Text style={{color: 'white', fontSize: 18, marginLeft: 6}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
          <TouchableOpacity style={styles.dietCard}>
            <View style={styles.cardLeft}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: 600,
                  marginTop: 10,
                }}>
                Intersting For You:
              </Text>
              <Text style={{color: 'white', fontSize: 16, marginTop: 18}}>
                Calorie Chart: Bulk or Cut?
              </Text>
              <Text
                style={{
                  color: '#27005D',
                  fontWeight: 600,
                  marginTop: 40,
                  fontSize: 18,
                }}>
                Tap to Know More
              </Text>
            </View>
            <View style={styles.cardRight}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'stretch',
                  borderRadius: 20,
                }}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/hand-drawn-set-nutrition-detox-diet-food-doodle-weight-loss-healthy-food-nutrients-sketch-style_563464-286.jpg?w=360',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bmiCalcView}>
          <Text style={{fontSize: 28, color: 'white', marginLeft: 8}}>
            BMI Calculator
          </Text>
          <View
            style={{
              height: '16%',

              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[
                styles.genderSelect,
                isMale && {backgroundColor: '#836FFF'},
              ]}
              onPress={maleSelect}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderSelect,
                isFemale && {backgroundColor: '#836FFF'},
              ]}
              onPress={femaleSelect}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: '60%', paddingHorizontal: 10}}>
            <View
              style={{
                height: '20%',
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: '30%',

                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 24}}>Age:</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={ageInputHandler}
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft: 18,
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                height: '20%',

                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: '30%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 24}}>Weight:</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={weightInputHandler}
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft: 18,
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                  }}
                />
              </View>
              <View
                style={{
                  width: '45%',
                  marginLeft: 10,
                  height: '100%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={[
                    styles.genderSelect,
                    isKg && {backgroundColor: '#836FFF'},
                  ]}
                  onPress={kgSelect}>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                    kg
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderSelect,
                    isLbs && {backgroundColor: '#836FFF'},
                  ]}
                  onPress={lbsSelect}>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                    lbs
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: '20%',
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: '30%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 24}}>Height:</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={heightInputHandler}
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft: 18,
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                  }}
                />
              </View>
              <View
                style={{
                  width: '45%',
                  marginLeft: 10,
                  height: '100%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={[
                    styles.genderSelect,
                    isMeter && {backgroundColor: '#836FFF'},
                  ]}
                  onPress={meterSelect}>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                    Meter
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderSelect,
                    isFeet && {backgroundColor: '#836FFF'},
                  ]}
                  onPress={feetSelect}>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                    Feet
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: '20%',
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: '30%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 24}}>Goal:</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={goalInputHandler}
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft: 18,
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                  }}
                />
              </View>
              <View
                style={{
                  width: '45%',
                  height: '100%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <TouchableOpacity
                  style={[
                    styles.genderSelect,
                    isKg && {backgroundColor: '#836FFF'},
                  ]}
                  onPress={kgSelect}>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                    kg
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderSelect,
                    isLbs && {backgroundColor: '#836FFF'},
                  ]}
                  onPress={lbsSelect}>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
                    lbs
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              height: '13%',
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <TouchableOpacity
              onPress={calcBmi}
              style={{
                backgroundColor: 'orange',
                height: '100%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 600, fontSize: 28}}>
                Calculate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {bottomSheetVisible && (
          <BmiBottomSheet
            setBottomSheetVisible={setBottomSheetVisible}
            bmiType={bmiType}
            bmiDesc={bmiDesc}
            bmiValue={bmiValue}
          />
        )}
        {/* </KeyboardAvoidingView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
  },
  cardView: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dietCard: {
    height: '90%',
    width: '93%',
    backgroundColor: '#836FFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLeft: {
    width: '58%',
    height: '100%',
    paddingHorizontal: 6,
  },
  cardRight: {
    width: '40%',
    height: '80%',
  },
  bmiCalcView: {
    height: '66%',
  },
  genderSelect: {
    backgroundColor: '#211951',
    width: '45%',
    height: '70%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
