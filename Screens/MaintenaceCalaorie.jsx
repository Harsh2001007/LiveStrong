import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const Mc = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
      <Image
        source={{
          uri: 'https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg',
        }}
        height={56}
        width={56}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Mc;
