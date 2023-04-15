import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, ViewStyle} from 'react-native';

// components

// constants
import {DIMENSIONS, COLORS, CONSTANTS} from '../constants';

interface propTypes {
  parentContainer?: ViewStyle | ViewStyle[];
  innerContainer?: ViewStyle | ViewStyle[];
  children: JSX.Element | JSX.Element[];
  statusBarStyle?: string;
}

const UIContainer = (props: propTypes) => {
  return (
    <SafeAreaView style={[styles.container, props.parentContainer]}>
      <View style={[styles.childContainer, props.innerContainer]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.screenWidth,
    height: DIMENSIONS.screenHeight,
    backgroundColor: COLORS.grey.grey100,
  },
  childContainer: {
    flex: 1,
  },
});

export default UIContainer;
