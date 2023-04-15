import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from "@react-native-async-storage/async-storage";

const {fontScale} = Dimensions.get('screen');

// normalize font sizes
const RNSize = (fontSize: number) => {
  return fontSize;
};

// print console logs
const showConsole = (content: any) => {
  console.log(content);
};

// check device type
const isTablet = (): boolean => {
  return DeviceInfo.getDeviceType() == 'Desktop' || DeviceInfo.isTablet();
};

// get data from async storage
const storeData = async(key:string, content:any)=>{
  try{    
    await AsyncStorage.setItem(key,content)
  }catch(e){
      console.log(e)
  }
}

// get data from async storage
const getData = async(key:string)=>{
  try{
      let result = await AsyncStorage.getItem(key)
      return result;
  }catch(e){
      console.log(e)
  }
}

// remove data from async storage
const removeData = async(key:string)=>{
  try{
      let result = await AsyncStorage.removeItem(key);
      return result;
  }catch(e){
      console.log(e)
  }
}

export default {
  RNSize,
  showConsole,
  isTablet,
  storeData,
  getData
};
