import React, { Component } from 'react'
import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

const PADDING = 10

export default {
    screenWidth:width,
    screenHeight:height,
    PADDING
}