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

export const WelcomeScreen = ({navigation}) => {

  console.log('WelcomeScreen');
  return <Text style={stylesMain.text}>WelcomeScreen</Text>;
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
