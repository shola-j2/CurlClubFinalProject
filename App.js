import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import React, { useEffect, useMemo, useState } from 'react';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import HairProgress from './HairProgress';
import RootStackScreen from './RootStackScreen';
import { AuthContext } from './components/Context';

import {
  useFonts,
  LibreBaskerville_400Regular,
  LibreBaskerville_400Regular_Italic,
  LibreBaskerville_700Bold,
} from '@expo-google-fonts/libre-baskerville';


const App = () => {
  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
    LibreBaskerville_400Regular_Italic,
    LibreBaskerville_700Bold,
  });

  // check if the user is authenticated
  const [isLoading, setIsLoading] = useState(true);
  // // to validate the user
  const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  //react hook useMemo - speeds up the execution process by using memorisation technique
  const authContext = useMemo(() => ({
    login:  (userName, password) => {
      //set user token and isLoading
      setUserToken('abcd');
      setIsLoading(false);

      //check if username and password matches
      // need to set username and password in code because there is no database set up
      let userToken;
      userToken = null;

      if (userName == 'user' && password == 'password') {
        userToken = 'abcd';
      }
    },
    logout: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
  }));

  // react hook
  useEffect(() => {
    // check if user is logged in
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (!fontsLoaded) {

  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken != null ? (
            <AppNavigator />
          )
            :
            <RootStackScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }

};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator
  >
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarLabel: 'HOME',
        tabBarIcon: () => (
          <AntDesign name='home' size={22} color='black' />
        ),
        headerShown: false
      }}
    />

    <Tab.Screen
      name='Salons'
      component={SearchScreen}
      options={{
        tabBarLabel: 'SALONS',
        tabBarIcon: () => (
          <AntDesign name='search1' size={22} color='black' />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name='Hair Progress'
      component={HairProgress}
      options={{
        tabBarLabel: 'PROGRESS',
        tabBarIcon: () => (
          <AntDesign name='user' size={22} color='black' />
        ),
        headerShown: false
      }}
    />
  </Tab.Navigator>
);

export default App;
