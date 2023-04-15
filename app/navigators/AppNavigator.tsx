import React, { Component } from 'react'
import { StyleSheet, Platform ,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,NativeStackNavigationOptions } from '@react-navigation/native-stack';

// navigation
import {RouteNames} from '.'

// screens
import {HomeScreen} from '../screens'

// constants
import {COLORS,UTILS} from '../constants'

const Stack = createNativeStackNavigator()

const AppNavigator = ()=>{

    // dispatch

    // color schem

    // default options
    const defaultNavitationOptions:NativeStackNavigationOptions = {
        headerShown: true,
        headerShadowVisible: true,
       
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          color: COLORS.white,
          fontWeight:'bold'
        },
        headerStyle: {
          backgroundColor: COLORS.blue.blue900,
        },
        headerBackTitle: '',
        animation: Platform.OS == 'ios' ? 'default' : 'slide_from_right',
    }

    return(
       <Stack.Navigator>
        <Stack.Screen 
            name={RouteNames.Home}
            component={HomeScreen}
            options={{
                ...defaultNavitationOptions,
                orientation: UTILS.isTablet() ? "default":'portrait'
            }}/>
       </Stack.Navigator>
    )
}

export default AppNavigator


