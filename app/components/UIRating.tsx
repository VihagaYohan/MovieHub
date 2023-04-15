import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';

// components
import {UITextView} from '.';

// constants
import {COLORS, CONSTANTS, DIMENSIONS} from '../constants';


interface propsTypes {
  fill:number
}

const UIRating = (props: propsTypes) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={60}
        width={8}
        fill={props.fill}
        tintColor={COLORS.green.green400}
        backgroundColor={COLORS.blue.blue100}>
        {fill => (
          <View
            style={{
              backgroundColor: COLORS.blue.blue900,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
              }}>
              {props.fill}%
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },
});

export default UIRating;
