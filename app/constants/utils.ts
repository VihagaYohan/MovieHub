import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import DeviceInfo from 'react-native-device-info'

const {fontScale} = Dimensions.get('screen')

// normalize font sizes
const RNSize = (fontSize:number)=>{
    return fontSize
}

// print console logs
const showConsole = (content:any)=>{
    console.log(content)
}

// check device type
const isTablet = ():boolean =>{
    return DeviceInfo.getDeviceType() == "Desktop" || DeviceInfo.isTablet()
}

export default {
    RNSize,
    showConsole,
    isTablet
}