import React, { useEffect} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import {useDispatch} from 'react-redux';
// import {setPhoto} from '../../redux/actions/photo';
// import giphy from '../../assets/index';
// import {ButtonCustom} from '../../components/ButtonCustom/ButtonCustom';

export const MainScreen = ({navigation}) => {
  useEffect(() => {
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
