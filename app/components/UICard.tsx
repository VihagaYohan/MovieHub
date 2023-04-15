import React, { Component } from 'react'
import {StyleSheet,View,Text,Pressable,ViewStyle} from 'react-native'

// componets

// constants
import {DIMENSIONS,CONSTANTS, STYLES,UTILS} from '../constants'

interface IUICardProps {
    containerStyle?:ViewStyle | ViewStyle[]
    children?:JSX.Element | JSX.Element[]
}

const UICard = (props:IUICardProps) => {
    return(
        <View style={[styles.containerStyle,props.containerStyle]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        width:CONSTANTS.DEFAULT_WIDTH,
        borderRadius:CONSTANTS.RADIUS,
        backgroundColor:'white',
        paddingVertical:UTILS.RNSize(20),
        ...STYLES.shadow
    }
})

export default UICard