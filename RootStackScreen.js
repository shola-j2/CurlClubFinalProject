import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import SplashScreen from './SplashScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='SplashScreen' component={SplashScreen} />
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
        <RootStack.Screen name='SignupScreen' component={SignupScreen} /> 
    </RootStack.Navigator>
);

export default RootStackScreen;