import {useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './components/Menu';
import Cau1 from './components/Cau1';
import Cau2 from './components/Cau2';
import Cau3 from './components/Cau3';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu"
        component={Menu}
        options={{ title: 'Menu', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau1"
        component={Cau1}
        options={{ title: 'Cau1', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau2"
        component={Cau2}
        options={{ title: 'Cau2', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau3"
        component={Cau3}
        options={{ title: 'Cau3', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
    </Stack.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
  );

}
