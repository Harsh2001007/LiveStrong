import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bmi from './Screens/Bmi';
import Mc from './Screens/MaintenaceCalaorie';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Onboarding from './Screens/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Screens/Home';
import Diet from './Screens/Diet';

const Stack = createNativeStackNavigator();
export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };
    fetchData();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Onboarding"
              screenOptions={{headerShown: false}}>
              {isAppFirstLaunched && (
                <Stack.Screen
                  name="Onboarding-screens"
                  component={Onboarding}
                />
              )}
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Bmi-page" component={Bmi} />
              <Stack.Screen name="Maintain-page" component={Mc} />
              <Stack.Screen name="Diet-page" component={Diet} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    )
  );
}

const styles = StyleSheet.create({});
