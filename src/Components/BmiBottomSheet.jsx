import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React, {useRef, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Link} from '@react-navigation/native';

export default function BmiBottomSheet({
  setBottomSheetVisible,
  bmiType,
  bmiDesc,
  bmiValue,
}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['45%', '50%', '75%'], []);
  const handleClosePress = () => {
    bottomSheetRef.current?.close();
    setBottomSheetVisible(false);
  };
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  return (
    <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
      <View style={styles.sheetBody}>
        <View style={styles.topView}>
          <View style={styles.resultTextView}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: 600}}>
              Results
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleClosePress}
            style={{
              padding: 10,
              backgroundColor: '#1D2B53',
              width: '30%',
              borderRadius: 10,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultView}>
          <View style={styles.resutlText}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 600}}>
              Your BMI :
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 600,
                marginLeft: 4,
              }}>
              {`${bmiType} --> ${bmiValue}`}
            </Text>
          </View>
          <View style={styles.resultDesc}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
              {bmiDesc}
            </Text>
          </View>
        </View>
        <View style={styles.moreDetail}>
          <TouchableOpacity
            style={{
              backgroundColor: '#570A57',
              paddingVertical: 18,
              justifyContent: 'center',
              paddingHorizontal: 6,
              borderRadius: 10,
              marginTop: 8,
              alignItems: 'center',
            }}
            onPress={() =>
              Linking.openURL('https://www.calculator.net/bmi-calculator.html')
            }>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
              Tap here for more detailed Information
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.updateDetail}>
          <TouchableOpacity
            style={{
              backgroundColor: '#570A57',
              paddingVertical: 18,
              justifyContent: 'center',
              paddingHorizontal: 6,
              borderRadius: 10,
              marginTop: 8,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
              Update Calculated Bmi To Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  sheetBody: {
    height: '100%',
    paddingHorizontal: 10,
  },
  topView: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderBottomWidth: 2,
    height: '10%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  resultTextView: {
    width: '70%',
  },
  resutlText: {
    flexDirection: 'row',
  },
  resultDesc: {
    backgroundColor: '#49108B',
    paddingVertical: 18,
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 8,
  },
  resultView: {
    marginTop: 14,
  },
});
