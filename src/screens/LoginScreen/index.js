import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {tryAuth} from '../../redux/actions/auth';

export const LoginScreen = ({navigation}) => {
  const isAuth = useSelector(state => state.auth.isAuth);

  if (isAuth) {
    navigation.navigate('WelcomeScreen');
  }

  const [email, setEmail] = useState('1@1.com');
  const [password, setPassword] = useState('12345678');
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isDisabledButton = (email, password) =>
    !password || !email || password.length < 7 || !emailRegex.test(email);

  const dispatch = useDispatch();
  const signIn = val => () => {
    dispatch(tryAuth(val));
  };

  return (
    <View style={stylesMain.container}>
      <TextInput
        value={email}
        style={stylesMain.text}
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
        style={stylesMain.text}
        returnKeyType="go"
        placeHolder={'password'}
        onChange={event => setPassword(event.nativeEvent.text)}
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        error=" "
      />

      <Button
        disabled={isDisabledButton(email, password)}
        title="sign in"
        onPress={signIn({email, password})}
      />
    </View>
  );
};
const stylesMain = StyleSheet.create({
  text: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
