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

export default function SignupPage({navigation}) {
  const [isChecked, setIsChecked] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');

  const nameHandleChange = text => {
    setNameValue(text);
    console.log(nameValue);
  };

  const emailHandleChange = text => {
    setEmailValue(text);
    console.log(emailValue);
  };

  const passHandleChange = text => {
    setPassValue(text);
    console.log(passValue);
  };

  const handleSignUp = () => {
    navigation.navigate('Otp-page', {
      nameValue: nameValue,
      emailValue: emailValue,
    });
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
            <Text style={styles.mainLoginText}>Create an account</Text>
          </View>
          <View style={styles.loginDescContainer}>
            <Text style={styles.loginDesc}>
              welcome back! Please enter your details.
            </Text>
          </View>
        </View>
        <View style={styles.emailFieldContainer}>
          <View style={styles.emailTextContainer}>
            <Text style={{color: 'white', fontSize: 20}}>Name</Text>
          </View>
          <View style={styles.emailInputContainer}>
            <View style={styles.emailIconContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color="#7077A1"
              />
            </View>
            <View style={styles.emailInputFieldContainer}>
              <TextInput
                placeholder="Enter your name"
                style={styles.emailField}
                placeholderTextColor={'grey'}
                onChangeText={nameHandleChange}
              />
            </View>
          </View>
        </View>
        <View style={styles.emailFieldContainer}>
          <View style={styles.emailTextContainer}>
            <Text style={{color: 'white', fontSize: 20}}>Email</Text>
          </View>
          <View style={styles.emailInputContainer}>
            <View style={styles.emailIconContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color="#7077A1"
              />
            </View>
            <View style={styles.emailInputFieldContainer}>
              <TextInput
                placeholder="Enter your email"
                style={styles.emailField}
                placeholderTextColor={'grey'}
                onChangeText={emailHandleChange}
              />
            </View>
          </View>
        </View>
        <View style={styles.passFieldContainer}>
          <View style={styles.passTextContainer}>
            <Text style={{color: 'white', fontSize: 20}}>Password</Text>
          </View>
          <View style={styles.passInputContainer}>
            <View style={styles.passIconContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color="#7077A1"
              />
            </View>
            <View style={styles.passInputFieldContainer}>
              <TextInput
                placeholder="Enter your password"
                style={styles.passField}
                placeholderTextColor={'grey'}
                onChangeText={passHandleChange}
              />
            </View>
          </View>
        </View>
        <View style={styles.loginFeaturesContainer}>
          <View style={styles.chcekboxContainer}>
            <CheckBox
              style={{width: '100%', height: '70%'}}
              checkBoxColor="white"
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText="Remember Me!"
              rightTextStyle={{color: 'white', fontSize: 18}}
            />
          </View>
          <View style={styles.forgetContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 700,
                marginLeft: 30,
              }}>
              Forget Password
            </Text>
          </View>
        </View>
        <View style={styles.impCTAs}>
          <LinearGradient
            colors={['#C94C47', '#813E86']}
            style={styles.loginBtn}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleSignUp}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity style={styles.googleLogin}>
            <Icon
              name="google"
              size={30}
              color="#891652"
              style={{marginRight: 18}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Log In With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookLogin}>
            <Icon
              name="facebook-f"
              color="#98ABEE"
              size={30}
              style={{marginRight: 18}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Log In With Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupAsk}>
          <View style={styles.signUP}>
            <Text style={{color: 'grey', fontSize: 18, fontWeight: 600}}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login-page');
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 600,
                  marginLeft: 8,
                }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
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
  emailFieldContainer: {
    height: '12%',
    paddingHorizontal: 12,
  },
  emailInputContainer: {
    height: '55%',
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#222831',
    borderColor: 'white',
    marginTop: 8,
  },
  emailIconContainer: {
    justifyContent: 'center',
    width: '10%',
  },
  emailInputFieldContainer: {
    width: '85%',
    marginLeft: 8,
    justifyContent: 'center',
  },
  passField: {
    fontSize: 20,
    height: '50%',
    color: 'white',
  },
  passFieldContainer: {
    height: '12%',
    paddingHorizontal: 12,
    marginTop: 12,
  },
  passInputContainer: {
    height: '55%',
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#222831',
    borderColor: 'white',
    marginTop: 8,
  },
  passIconContainer: {
    justifyContent: 'center',

    width: '10%',
  },
  passInputFieldContainer: {
    width: '85%',
    marginLeft: 8,
    justifyContent: 'center',
  },
  passField: {
    fontSize: 20,
    height: '50%',
    color: 'white',
  },
  emailField: {
    fontSize: 20,
    height: '50%',
    color: 'white',
  },
  loginFeaturesContainer: {
    height: '5%',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  chcekboxContainer: {
    borderWidth: 1,
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  forgetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  impCTAs: {
    height: '30%',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  loginBtn: {
    height: '20%',
    borderRadius: 8,
    marginTop: 10,
  },
  googleLogin: {
    height: '20%',
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
    flexDirection: 'row',
    marginTop: 18,
  },
  facebookLogin: {
    height: '20%',
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
    flexDirection: 'row',
    marginTop: 18,
  },
  signupAsk: {
    height: '5%',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUP: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
