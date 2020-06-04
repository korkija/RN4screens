import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const SettingsScreen = () => {
  return (
    <View style={stylesMain.container}>
      <Text style={stylesMain.text}>SettingsScreen</Text>
    </View>
  );
};
const stylesMain = StyleSheet.create({
  text: {
    fontSize: 26,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
