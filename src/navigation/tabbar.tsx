import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from 'src/modules/home'
import { EpisodeScreen } from 'src/modules/pokemon'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.HomeScreen}>
      <Tab.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{
          headerTitle: 'Characters',
          tabBarIcon: ({ focused }) => <View />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => <View />,
        }}
      />
    </Tab.Navigator>
  )
}
