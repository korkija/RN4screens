import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {setPhoto} from '../../redux/actions/photo';
// import giphy from '../../assets/index';
// import {ButtonCustom} from '../../components/ButtonCustom/ButtonCustom';

export const WelcomeScreen = () => {
  console.log('WelcomeScreen');
  const navigation = useNavigation();
  return (
    // <TouchableOpacity onPress={navigation.goBack()}>
    <TouchableOpacity onPress={() => navigation.navigate('mainScreen')}>
      <Text style={stylesMain.text}>WelcomeScreen</Text>
    </TouchableOpacity>
  );
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
