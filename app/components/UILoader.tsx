import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

// constants
import {COLORS} from '../constants';

interface propTypes {
  size?: string;
  color?: string;
}

const UILoader = ({size = 'large', color = COLORS.blue.blue900}: propTypes) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UILoader;
