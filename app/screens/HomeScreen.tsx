import React, { Component,useState,useEffect,useCallback,useMemo,useLayoutEffect } from 'react'
import {StyleSheet,View,Text,ViewStyle} from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

// components
import {UIContainer} from '../components'

// constants

const HomeScreen = ({
    navigation
}:{
    navigation:NativeStackNavigationProp<any,any>
})=>{
    
    // navigation properties
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Top Rated Movies",
        })
    })

    return(
       <UIContainer parentContainer={styles.container}>
            <Text>Home screen</Text>
       </UIContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default HomeScreen