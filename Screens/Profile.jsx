import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OpacityTile from '../src/Components/OpacityTile';
import {useRoute} from '@react-navigation/native';

export default function Profile({navigation}) {
  const route = useRoute();
  const {nameOfUser, emailOfUser} = route.params;

  return (
    <LinearGradient
      colors={['#3F7930', '#24312C']}
      style={{height: '100%', paddingHorizontal: 6}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <SafeAreaView>
        <View style={{height: '99%'}}>
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
          <View style={styles.myProfile}>
            <View style={styles.profileTopView}>
              <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
                My Profile
              </Text>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => navigation.navigate('Diet-page')}>
                <Text style={{color: 'white', fontSize: 20}}>Edit</Text>
                <MaterialCommunityIcons
                  name="pencil"
                  size={20}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imgView}>
              <Image
                style={{
                  height: '100%',
                  width: '30%',
                  borderRadius: 60,
                  borderWidth: 1,
                  borderColor: 'white',
                }}
                source={{
                  uri: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/67/Endeavor_is_glad_to_see_his_trainees.png/revision/latest?cb=20210626113134',
                }}
              />
            </View>
            <View style={styles.loginDetailsView}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
                {nameOfUser}
              </Text>
              <Text style={{color: '#979897', fontSize: 16}}>
                {emailOfUser}
              </Text>
              <Text style={{color: '#979897', fontSize: 16}}>
                member since 01/01/1992
              </Text>
            </View>
          </View>
          <View style={styles.aboutMe}>
            <Text style={{fontSize: 24, color: 'white', fontWeight: '600'}}>
              About Me
            </Text>
            <View style={styles.abtOne}>
              <OpacityTile cardTitle={'Gender'} cardValue={'Male'} />
              <OpacityTile cardTitle={'Birthday'} cardValue={'10/07/1989'} />
            </View>
            <View
              style={{
                height: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <OpacityTile cardTitle={'Height'} cardValue={'170cm'} />
              <OpacityTile cardTitle={'Current Weight'} cardValue={'80 kg'} />
            </View>
          </View>
          <View style={styles.aboutMe}>
            <Text style={{fontSize: 24, color: 'white', fontWeight: '600'}}>
              Workout Plan
            </Text>
            <View style={styles.abtOne}>
              <OpacityTile cardTitle={'BMI'} cardValue={'20'} />
              <OpacityTile
                cardTitle={'Workout Type'}
                cardValue={'2 Muscle / Day'}
              />
            </View>
            <View
              style={{
                height: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <OpacityTile
                cardTitle={'Current Calorie Intake'}
                cardValue={'2200 Kcal / day'}
              />
              <OpacityTile cardTitle={'Physique Goal'} cardValue={'Cut'} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  myProfile: {
    height: '30%',
  },
  profileTopView: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgView: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginDetailsView: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBtn: {
    flexDirection: 'row',
    backgroundColor: '#19211B',
    height: '90%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
  },
  aboutMe: {
    height: '25%',

    marginTop: 4,
  },
  abtOne: {
    height: '40%',
    flexDirection: 'row',
    marginVertical: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
