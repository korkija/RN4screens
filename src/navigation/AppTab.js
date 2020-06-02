import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, SettingsScreen} from '../screens';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}
      tabBarOptions={{
        showIcon: false,
        labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 20,
        },
      }}>
      <Tab.Screen
        options={{title: 'Main'}}
        name="mainScreen"
        component={MainScreen}
      />
      <Tab.Screen
        options={{title: 'settings'}}
        name="settingsScreen"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default AppTab;