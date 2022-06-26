import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import InScreen from './src/screens/InScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PreloadScreen from './src/screens/Preload/PreloadScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNav from './src/screens/navigations/AuthNav';
import HomeNav from './src/screens/navigations/HomeNav';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isConnected = false;


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

  if (!isConnected ) {
    return <AuthNav />
  } else {
    return <HomeNav />
  }
}

export default App;
