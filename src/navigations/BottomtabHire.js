/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import {dashboard} from '../screens/hire';
import {Addjob} from '../screens/hire';
import {Alljobs} from '../screens/hire';

const Tab = createBottomTabNavigator();

export const BottomtabHire = () => {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="dashboard"
        component={dashboard}
        options={{
          tabBarLabel: 'Candidate',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Addjob"
        component={Addjob}
        options={{
          tabBarLabel: 'Add job',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="pencil-plus-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Alljobs"
        component={Alljobs}
        options={{
          tabBarLabel: 'Posted Jobs',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="apps" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
