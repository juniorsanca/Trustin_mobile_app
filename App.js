import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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