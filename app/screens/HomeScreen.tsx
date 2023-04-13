import React, {
  Component,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


// components
import {UIContainer, UIRating} from '../components';

// constants
import {COLORS, CONSTANTS, STYLES} from '../constants';

const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any, any>;
}) => {
  // navigation properties
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Top Rated Movies',
    });
  });

  return (
    <UIContainer>
      <View style={[styles.itemContainer, STYLES.shadow]}></View>

      <UIRating />

      
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
