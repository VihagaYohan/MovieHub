import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {IMAGE_URL} from '@env';

// components
import {UIImageView, UIRating} from '../components';

// constants
import {UTILS} from '../constants'

const UIImageWithRating = (props: any) => {
  return (
    <View style={{}}>
      <UIImageView url={`${IMAGE_URL}${props.path}`} />
      <View
        style={{position: 'absolute', top: UTILS.RNSize(130), left: UTILS.RNSize(30),}}>
        <UIRating
          size={UTILS.RNSize(30)}
          width={UTILS.RNSize(1)}
          fill={props.popularity}
          value={UTILS.RNSize(30)}
          parentContainer={{
            position: 'absolute',
            top: UTILS.RNSize(150),
            left: UTILS.RNSize(35),
            marginBottom: UTILS.RNSize(20),
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UIImageWithRating;
