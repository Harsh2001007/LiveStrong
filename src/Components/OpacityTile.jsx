import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OpacityTile({cardTitle, cardValue}) {
  return (
    <View style={styles.cardBody}>
      <Text style={{color: 'grey', fontSize: 15, marginBottom: 4}}>
        {cardTitle}
      </Text>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
        {cardValue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: '#1C291C',
    height: '100%',
    width: '49%',
    paddingLeft: 10,
    justifyContent: 'center',
    marginHorizontal: 1.5,
  },
});
