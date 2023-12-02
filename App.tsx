import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from 'react';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {


  const SplashScreenHide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreenHide();
    }, 300)
  }, [])

  return (
    <>
      <Home />
      <StatusBar style="auto" hidden />
    </>
  );
}