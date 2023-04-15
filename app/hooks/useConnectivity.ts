import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const UseConnectivity = () => {
  const [connection, setConnection] = useState<boolean>(false);

  // check connectivity
  const _checkConnectivity = () => {
    // Subscribe
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Is connected?', state.isConnected);
  });

  // Unsubscribe
  unsubscribe();
  };

  useEffect(() => {
    _checkConnectivity();
  }, []);

  return {connection};
};
export default UseConnectivity;
