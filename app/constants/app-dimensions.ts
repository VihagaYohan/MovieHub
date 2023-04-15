import React, { Component } from 'react'
import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')

const PADDING = 10
const BORDER_RADIUS = 10
const IMAGE_WIDTH=160

export default {
    screenWidth:width,
    screenHeight:height,
    PADDING,
    BORDER_RADIUS,
    IMAGE_WIDTH
}