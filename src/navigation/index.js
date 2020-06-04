import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import AppTab from './AppTab';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const ScreensStack = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log(isAuth);
  const linking = {
    prefixes: ['https://rn4screens.com', 'rn4screens://'],
    config: {
      WelcomeScreen: 'welcome',
      AppStack: {
        screens: {
          SettingsScreen: 'settings',
        },
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
        }}>
        {isAuth ? (
          <>
            <Stack.Screen name="AppStack" component={AppTab} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          </>
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
//adb shell am start -W -a android.intent.action.VIEW -d "rn4screens://login" com.simpleapp
