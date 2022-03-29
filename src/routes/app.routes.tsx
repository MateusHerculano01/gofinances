import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          borderTopColor: 'red'

        }

      }}
    >

      <Tab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />)
        }}
      />

      <Tab.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="attach-money"
              size={size}
              color={color}
            />)
        }}
      />

      <Tab.Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="pie-chart"
              size={size}
              color={color}
            />)
        }}
      />

    </Tab.Navigator>
  )
}