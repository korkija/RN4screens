import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
// import {useDispatch} from 'react-redux';
import {tryAuth} from '../../redux/actions/auth';
// import giphy from '../../assets/index';
// import {ButtonCustom} from '../../components/ButtonCustom/ButtonCustom';

export const LoginScreen = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isAuth = useSelector(state => state.auth.isAuth);

  if (isAuth) {
    navigation.navigate('WelcomeScreen');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isDisabledButton = (email, password) =>
    !password || !email || password.length < 5 || !emailRegex.test(email);

  const dispatch = useDispatch();
  const signIn = val => () => {
    dispatch(tryAuth(val));
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <Text style={stylesMain.text}>LoginScreen</Text>
      <TextInput
        value={email}
        style={{
          borderWidth: 2,
          borderColor: 'grey',
          borderRadius: 10,
          margin: 10,
        }}
        returnKeyType="go"
        placeHolder={'email'}
        autoCorrect={false}
        autoCapitalize="none"
        onChange={event => setEmail(event.nativeEvent.text)}
        keyboardType="email-address"
        error=" "
        autoFocus={true}
      />
      <TextInput
        secureTextEntry
        style={{
          borderWidth: 2,
          borderColor: 'grey',
          borderRadius: 10,
          margin: 10,
        }}
        returnKeyType="go"
        placeHolder={'password'}
        onChange={event => setPassword(event.nativeEvent.text)}
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        // keyboardType={'visible-password'}
        // keyboardType="email-address"
        error=" "
      />

      <Button
        disabled={isDisabledButton(email, password)}
        // style={button}
        title="sign in"
        onPress={signIn({email, password})}
        // label={I18n.t('common.enter')}
      />
    </SafeAreaView>
  );
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
