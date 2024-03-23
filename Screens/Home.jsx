import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomepageCards from '../src/Components/HomepageCards';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#2D3250'}}>
      <StatusBar backgroundColor={'#2D3250'} />
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View style={styles.innerLeft}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Firebase-page');
                }}>
                <Icon
                  name="gg-circle"
                  color="white"
                  size={40}
                  style={{marginLeft: 10}}></Icon>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginLeft: 10,
                }}>
                LIVE STRONG
              </Text>
            </View>
            <View style={styles.innerRight}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Realtimedb-page');
                }}>
                <Icon
                  name="heartbeat"
                  color="white"
                  size={40}
                  style={{marginLeft: 20}}></Icon>
              </TouchableOpacity>
              <Icon name="circle-o-notch" color="white" size={40}></Icon>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login-page');
                }}>
                <MaterialCommunityIcons
                  name="face-man"
                  color="white"
                  size={40}></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.75}}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <HomepageCards
              name="BMI CALCULATOR"
              category="Health"
              tagline="To Identify You"
              description="Instant BMI calculator. Track, stay informed."
              onPress={() => {
                navigation.navigate('Bmi-page');
                console.log('pressed');
              }}
            />
            <HomepageCards
              name="DIET PLANNER"
              category="Diet"
              tagline="Track meals, stay healthy."
              description="Plan meals, track intake, promote healthy eating."
              onPress={() => {
                navigation.navigate('Diet-page');
              }}
            />
            <HomepageCards
              name="MAINTENANCE KCAL CALC"
              category={'Health'}
              tagline={'Plan balanced diet.'}
              description={
                'Calculate maintenance calories for balanced nutrition."'
              }
            />
            <HomepageCards
              name="MAINTENANCE"
              category={'Health'}
              tagline={'Plan balanced diet.'}
              description={
                'Calculate maintenance calories for balanced nutrition."'
              }
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '90%',
  },
  header: {
    height: '10%',
    width: '100%',
  },
  headerInner: {
    flex: 1,
    flexDirection: 'row',
  },
  innerLeft: {
    width: '60%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerRight: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  mainBody: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    height: '100%',
  },
});
