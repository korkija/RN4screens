import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';
import {store} from './src/redux/store';
import ScreensStack from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

YellowBox.ignoreWarnings(['Remote debugger']);
console.disableYellowBox = true;

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <Provider store={store}>
        <ScreensStack />
      </Provider>
    </>
  );
};

export default App;
