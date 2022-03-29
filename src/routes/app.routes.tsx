import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

export function AppRoutes() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Listagem" component={Dashboard} />
        <Stack.Screen name="Cadastrar" component={Register} />
        <Stack.Screen name="Resumo" component={Register} />
      </Stack.Navigator>
    </>
  )
}