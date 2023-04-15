import React, {Component} from 'react';
import {StyleSheet, View, Text, TextProps, ViewStyle, TextStyle} from 'react-native';

// components

// constants
import {COLORS} from '../constants/';

interface propTypes extends TextProps {
  text: string;
  textStyle?: TextStyle | TextStyle[];
  style?: ViewStyle | ViewStyle[];
}

const UITextView = (props: propTypes) => {
  // color schema

  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.textStyle, props.textStyle]} {...props}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    color: COLORS.black,
  },
});

export default UITextView;
