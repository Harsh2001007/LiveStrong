import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default function HomepageCards({
  name,
  category,
  tagline,
  description,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.cardBody} onPress={onPress}>
      <View>
        <View
          style={{
            height: '32%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
            {name}
          </Text>
          <View
            style={{
              borderColor: 'orange',
              borderWidth: 1.5,
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
              height: '50%',
              borderRadius: 18,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>{category}</Text>
          </View>
        </View>
        <View
          style={{
            height: '32%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
            {tagline}
          </Text>
        </View>
        <View
          style={{
            height: '33%',
            width: '100%',
            borderColor: 'grey',
            borderTopWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'orange', fontWeight: '500', fontSize: 16}}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    height: height * 0.2,
    width: width * 0.9,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  topCardView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
  },
});
