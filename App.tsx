/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

// navigators
import {AppNavigator} from './app/navigators';

// screens
import {HomeScreen} from './app/screens';

// store
import {store} from './app/store/store';

function App(): JSX.Element {
  console.ignoredYellowBox;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
