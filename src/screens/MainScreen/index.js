import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

export const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logoutSc = async () => {
    await dispatch(logout());
    navigation.navigate('MainScreen');
  };

  return (
    <View style={stylesMain.container}>
      <View style={stylesMain.contentText}>
        <Text style={stylesMain.text}>MainScreen</Text>
      </View>
      <View style={stylesMain.button}>
        <Button title="logout" onPress={logoutSc} />
      </View>
    </View>
  );
};
const stylesMain = StyleSheet.create({
  contentText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 26,
  },
  text: {
    fontSize: 26,
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
