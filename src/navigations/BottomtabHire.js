/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import {dashboard} from '../screens/hire';
import {Addjob} from '../screens/hire';
import {Alljobs} from '../screens/hire';
import {BookmarkedCandidate} from '../screens/hire';
import {Settings} from '../screens/job';

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
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Addjob"
        component={Addjob}
        options={{
          tabBarLabel: 'Add job',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
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
      <Tab.Screen
        name="BookmarkedCandidate"
        component={BookmarkedCandidate}
        options={{
          tabBarLabel: 'Bookmarked',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bookmarks" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
