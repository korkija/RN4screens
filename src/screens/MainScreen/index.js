import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={stylesMain.text}>MainScreen</Text>
    </TouchableOpacity>
  );
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
