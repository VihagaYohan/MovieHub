import React, { Component } from 'react'
import {Dimensions} from 'react-native'

const {fontScale} = Dimensions.get('screen')

// normalize font sizes
const RNSize = (fontSize:number)=>{
    return fontSize
}

// print console logs
const showConsole = (content:any)=>{
    console.log(content)
}

export default {
    RNSize,
    showConsole
}