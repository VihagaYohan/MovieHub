import React, { Component } from 'react'
import {StyleSheet,SafeAreaView,View,ViewStyle} from 'react-native'

// components

// constants
import {DIMENSIONS} from '../constants'

interface propTypes {
    parentContainer?:ViewStyle | ViewStyle[],
    children:JSX.Element | JSX.Element[],
    statusBarStyle?: string
}

const UIContainer = (props:propTypes) =>{
    return(
        <SafeAreaView style={[styles.container,props.parentContainer]}>
            <View>{props.children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:DIMENSIONS.screenWidth,
        height:DIMENSIONS.screenHeight
    }
})

export default UIContainer