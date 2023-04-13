import React, { Component } from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';

// components
import {UITextView} from '.'

// constants
import {COLORS,CONSTANTS,DIMENSIONS} from '../constants'

const SIZE=60;

interface propsTypes {

}

const UIRating = (props:propsTypes) =>{
    return(
        <AnimatedCircularProgress
        size={200}
        width={3}
        fill={50}
        tintColor="#00e0ff"
        backgroundColor="#3d5875">
        {fill => <Text>{50}</Text>}
      </AnimatedCircularProgress>
    )
}

const styles =StyleSheet.create({
    container:{
        width:SIZE,
        height:SIZE,
        borderRadius:SIZE/2,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    innerContainer:{
        width:(SIZE/2),
        height:(SIZE/2),
        borderRadius:(SIZE/2)/2,
        backgroundColor:'green'
    }
})

export default UIRating