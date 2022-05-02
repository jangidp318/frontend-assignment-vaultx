import * as React from 'react';
import { Text, View, StyleSheet,Header } from 'react-native';
import Constants from 'expo-constants';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// You can import from local files
import Home from './components/Home';
import SplashScreen from './components/SplashScreen';
import CalMonth from './components/CalMonth';
import BannerPage from './components/BannerPage'

// or any pure javascript modules available in npm

const Stack = createStackNavigator();

const Auth = () => {
    return(
      <Home/>
    )
}

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name = "Auth"
          component = {Auth}
          options = {{headerShown: false}}
        />
        <Stack.Screen 
          name = "CalMonth"
          component = {CalMonth}
          options = {{headerShown: false}}
        />
        <Stack.Screen 
          name = "BannerPage"
          component = {BannerPage}
          options = {{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
