import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import {useDispatch} from 'react-redux';
// import {setPhoto} from '../../redux/actions/photo';
// import giphy from '../../assets/index';
// import {ButtonCustom} from '../../components/ButtonCustom/ButtonCustom';

export const MainScreen = ({navigation}) => {
  useEffect(() => {
    // console.log('MainScreen useEffect');
    SplashScreen.hide();
  }, []);

  console.log('MainScreen');

  return <Text style={stylesMain.text}>MainScreen</Text>;
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
