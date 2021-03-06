import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Signin} from '../screens/welcome';
import {WelcomeScreen} from '../screens/welcome';
import {Signup} from '../screens/welcome';
import {Chose} from '../screens/welcome';
import {Hiredashboard} from '../screens/job';
import {JobDetail} from '../screens/job';
import {ProfileDiscription} from '../screens/job';
import {dashboard} from '../screens/hire';
import {CanditateProfile} from '../screens/hire';

// navigatores
import {BottomTab} from './BottomTab';
import {BottomtabHire} from './BottomtabHire';
import {SplashScreen} from '../screens/SplashScreen';

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomtabHire"
          component={BottomtabHire}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CanditateProfile"
          component={CanditateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileDiscription"
          component={ProfileDiscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetail}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Hiredashboard"
          component={Hiredashboard}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Chose"
          component={Chose}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
