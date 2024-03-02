import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {useRef, useState} from 'react';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BMIResultView from '../src/Components/BMIResultView';
import BMIupdatedMessage from '../src/Components/BMIupdatedMessage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {create} from 'react-test-renderer';
import {useNavigation} from '@react-navigation/native';
import Mc from './MaintenaceCalaorie';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../images/breakfast.png'),
    title: 'Calculate Your Calorie',
    subtitle: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    id: '2',
    image: require('../images/indoor-bike.png'),
    title: 'Personalize Your Workout',
    subtitle: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    id: '3',
    image: require('../images/fitness-stat.png'),
    title: 'Track your Intense Workouts',
    subtitle: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
];

const Slide = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        width,
      }}>
      <Image
        source={item.image}
        style={{
          height: '75%',
          resizeMode: 'cover',
          borderRadius: 20,
        }}
      />
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            marginTop: 10,
            maxWidth: '70%',
            textAlign: 'center',
          }}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default function Onboarding({navigation}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          width,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: 'white',
                  width: 30,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 10}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.replace('Home')}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={skip}
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    borderWidth: 2,
                  },
                ]}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 20}} />
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#2D3250',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={'#2D3250'} />
      <FlatList
        ref={ref}
        data={slides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
        horizontal
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
    marginHorizontal: 3,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
