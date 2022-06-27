import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../OnboardingScreen';
import HomeScreen from '../HomeScreen';
import NewScreen from '../NewScreen';
import InScreen from '../InScreen';
import ProfileScreen from '../ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNav = () => {
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
        <Tab.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen 
            name="OnboardingScreen" 
            component={OnboardingScreen} />
          )}

            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={20} color="black" /> ), }} />
            
            <Tab.Screen name="NewScreen" component={NewScreen} options={{ tabBarLabel: 'News', tabBarIcon: ({ color, size }) => (
                <Icon name="camerao" size={20} color="black" /> ), }} />
            
            <Tab.Screen name="In" component={InScreen} options={{ tabBarLabel: 'Influencer', tabBarIcon: ({ color, size }) => (
                <Icon name="hearto" size={20} color="black" /> ), }} />

            <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={20} color="black" /> ), }} />

        </Tab.Navigator>
      </NavigationContainer>
    )

  )
}

export default HomeNav;