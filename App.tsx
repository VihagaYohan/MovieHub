/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigators
import {AppNavigator} from './app/navigators';

// screens
import {HomeScreen} from './app/screens';

// store
import {store} from './app/store/store';

function App(): JSX.Element {
  console.ignoredYellowBox;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
