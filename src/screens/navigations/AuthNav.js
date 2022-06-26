import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../OnboardingScreen';
import WelcomeScreen from '../WelcomeScreen';
import LoginScreen from '../Login/LoginScreen';
import RegisterScreen from '../Register/RegisterScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import PreloadScreen from '../Preload/PreloadScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNav = () => {
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
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
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


        </Stack.Navigator>
      </NavigationContainer>
    )

  )
}

export default AuthNav;
