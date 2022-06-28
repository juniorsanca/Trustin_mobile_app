import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PreloadScreen from '../screens/Preload/PreloadScreen';
import MainTab from './MainTab';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
    
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);

    if(appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', "false")
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    isAppFirstLaunched != null && (
        <Stack.Navigator 
            initialRouteName="Preload"
            screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen 
            name="OnboardingScreen" 
            component={OnboardingScreen} />
          )}

            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="PreloadScreen" component={PreloadScreen} />
            
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="MainTab" component={MainTab} />

        
        {/*
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewScreen" component={NewScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="InScreen" component={InScreen} />
          */}


        </Stack.Navigator>
    )
  )
}

export default MainStack;
