import React, {Component} from 'react';
import {StyleSheet, View, Image, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';

// constnats
import {UTILS, CONSTANTS, DIMENSIONS} from '../constants';

interface IImageProps {
  url: string;
  imageContainerStyle?: ViewStyle | ViewStyle[];
  imageStyle?: ViewStyle | ViewStyle[];
}

const UIImageView = (props: IImageProps) => {
  return (
    <View style={[styles.imageContainer, props.imageContainerStyle]}>
     <FastImage
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
        source={{
          uri:props.url,
          priority: FastImage.priority.normal,
        }}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: DIMENSIONS.IMAGE_WIDTH,
    aspectRatio: 0.7,
    borderRadius: UTILS.RNSize(10),
    overflow: 'hidden',
  },
});

export default UIImageView;
