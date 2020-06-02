import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {setPhoto} from '../../redux/actions/photo';
// import giphy from '../../assets/index';
// import {ButtonCustom} from '../../components/ButtonCustom/ButtonCustom';

export const LoginScreen = ({navigation}) => {
  console.log('LoginScreen');

  return <Text style={stylesMain.text}>LoginScreen</Text>;
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
