import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={stylesMain.container}
      onPress={() => navigation.navigate('MainScreen')}>
      <Text style={stylesMain.text}>WelcomeScreen</Text>
    </TouchableOpacity>
  );
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
