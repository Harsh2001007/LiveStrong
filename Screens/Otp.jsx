import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';

export default function Otp({navigation}) {
  const route = useRoute();
  const {nameValue, emailValue} = route.params;

  const [otpOne, setOtpOne] = useState('');
  const [otpTwo, setOtpTwo] = useState('');
  const [otpThree, setOtpThree] = useState('');
  const [otpFour, setOtpFour] = useState('');

  const otpOneHandler = text => {
    setOtpOne(text);
    console.log(otpOne);
  };

  const otpTwoHandler = text => {
    setOtpTwo(text);
    console.log(otpTwo);
  };

  const otpThreeHandler = text => {
    setOtpThree(text);
    console.log(otpThree);
  };

  const otpFourHandler = text => {
    setOtpFour(text);
    console.log(otpFour);
  };

  const verifyEmail = () => {
    if (otpOne == '1' && otpTwo == '2' && otpThree == '3' && otpFour == '4') {
      console.log('otp fetched');
      navigation.navigate('Profile-page', {
        nameOfUser: nameValue,
        emailOfUser: nameValue,
      });
    } else {
      console.log('failed to reach profile page');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            name="star-three-points-outline"
            size={50}
            color="white"
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: 'white',
              width: '80%',
              height: '1%',
              marginTop: '6%',
            }}></View>
        </View>
        <View style={styles.loginTextContainer}>
          <View style={styles.mainTextContainer}>
            <Text style={styles.mainLoginText}>Check Your Email</Text>
            <Text style={{color: 'white'}}>{nameValue}</Text>
            <Text>{emailValue}</Text>
          </View>
          <View style={styles.loginDescContainer}>
            <Text style={styles.loginDesc}>
              we sent a verification code to your email.
            </Text>
          </View>
        </View>
        <View style={styles.otpContainer}>
          <View style={styles.otp}>
            <TextInput
              style={{
                height: '100%',
                color: 'white',
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                width: '50%',
                marginLeft: 15,
              }}
              onChangeText={otpOneHandler}
            />
          </View>
          <View style={styles.otp}>
            <TextInput
              style={{
                height: '100%',
                color: 'white',
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                width: '50%',
                marginLeft: 15,
              }}
              onChangeText={otpTwoHandler}
            />
          </View>
          <View style={styles.otp}>
            <TextInput
              style={{
                height: '100%',
                color: 'white',
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                width: '50%',
                marginLeft: 15,
              }}
              onChangeText={otpThreeHandler}
            />
          </View>
          <View style={styles.otp}>
            <TextInput
              style={{
                height: '100%',
                color: 'white',
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                width: '50%',
                marginLeft: 15,
              }}
              onChangeText={otpFourHandler}
            />
          </View>
        </View>
        <View style={styles.ctaContainer}>
          <LinearGradient
            style={styles.cta}
            colors={['#C94C47', '#813E86']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              onPress={verifyEmail}
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Verify Email
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.resendContainer}>
          <View>
            <Text style={{color: 'grey', fontSize: 16}}>
              Didn't receive the email?
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => navigation.navigate('Login-page')}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
              Back to log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  loginTextContainer: {
    height: '15%',
  },
  mainLoginText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: 1,
  },
  loginDesc: {
    color: 'grey',
    fontSize: 18,
  },
  mainTextContainer: {
    justifyContent: 'center',
    height: '50%',
    paddingHorizontal: 12,
  },
  loginDescContainer: {
    paddingHorizontal: 12,
  },
  otpContainer: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  otp: {
    height: '90%',
    width: '18%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaContainer: {
    height: '10%',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cta: {
    backgroundColor: '#222831',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.5,
  },
  resendContainer: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBack: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
